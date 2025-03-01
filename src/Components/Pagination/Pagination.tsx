import React, { useState, ReactElement, ReactNode } from 'react';
import "./Pagination.css";

interface PaginationProps {
  children: React.ReactNode;
  rowsPerPageOptions?: number[];
  defaultRowsPerPage?: number;
  styleNumber?: number;
  designTemplate?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({ 
  children, 
  rowsPerPageOptions = [2, 10, 15], 
  defaultRowsPerPage = 4,
//   styleNumber,
  designTemplate = true,
}) => {

//   const [dynamicStyle, setDynamicStyle] = useState<string | null>(null);

//   useEffect(() => {
//     // Dynamically import a stylesheet based on the styleNumber
//     switch (styleNumber) {
//       case 1:
//         import('./Pagination1.css'); // Import first stylesheet
//         setDynamicStyle('style1'); // Optionally set a class or style
//         break;
//       case 2:
//         import('./Pagination2.css'); // Import second stylesheet
//         setDynamicStyle('style2');
//         break;
//       case 3:
//         import('./Pagination3.css'); // Import third stylesheet
//         setDynamicStyle('style3');
//         break;
//       case 4:
//         import('./Pagination4.css'); // Import third stylesheet
//         setDynamicStyle('style3');
//         break;
//       default:
//         import('./Pagination.css'); // Default stylesheet if no valid styleNumber
//         setDynamicStyle('style1');
//         break;
//     }
//   }, [styleNumber]);

  // Check table element
  const table = React.Children.toArray(children).find((child): child is ReactElement<{ children: ReactNode }> => {
    return React.isValidElement(child) && child.type === 'table';
  });

  // Extract thead and check
  const thead = React.Children.toArray(table?.props.children).find((child): child is ReactElement<{ children: ReactNode }> => {
    return React.isValidElement(child) && child.type === 'thead';
  });

  // Extract tbody and check
  const tbody = React.Children.toArray(table?.props.children).find((child): child is ReactElement<{ children: ReactNode }> => {
    return React.isValidElement(child) && child.type === 'tbody';
  });

  // Extract headers from thead
  const headers = React.Children.toArray(thead?.props.children).filter((child): child is ReactElement<{ children: ReactNode }> => {
    return React.isValidElement(child) && child.type === 'tr';
  });

  // Extract rows from tbody
  const rows = React.Children.toArray(tbody?.props.children).filter((child): child is ReactElement<{ children: ReactNode }> => {
    return React.isValidElement(child) && child.type === 'tr';
  });
  // //check table element
  // const table= React.Children.toArray(children).find(child => {
  //   return React.isValidElement(child) && child.type === 'table';
  // });
  
  // //extraxt thead and check
  // const thead = React.Children.toArray(table?.props.children).find(child => {
  //   return React.isValidElement(child) && child.type === 'thead';
  // });

  // //extraxt tbody and check
  // const tbody = React.Children.toArray(table?.props.children).find(child => {
  //   return React.isValidElement(child) && child.type === 'tbody';
  // });
  
  // //get thead
  // const headers = React.Children.toArray(thead?.props.children)
  // //get all rows in tbody
  // const rows = React.Children.toArray(tbody?.props.children);

  //table props
  const tableProps = {...table?.props};
  delete tableProps.children;

  //thead props
  const theadProps = {...thead?.props};
  delete theadProps.children;

  //tbody props
  const tbodyProps = {...tbody?.props};
  delete tbodyProps.children;


  
  //current page and rows per page
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

  //total pages
  const totalPages = Math.ceil(rows.length / rowsPerPage);

  const start = (currentPage - 1) * rowsPerPage;
  const paginatedRows = rows.slice(start, start + rowsPerPage);

  const getVisiblePageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  return(
    <div className="paginationContainer">
      <div className={designTemplate ? 'tableContainer' : 'tableContainerCustom'}>
        <table {...tableProps}>
          <thead {...theadProps}>{headers}</thead>

          <tbody {...tbodyProps}>{paginatedRows}</tbody>
        </table>
      </div>


      <div className="paginationControls">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
          Prev
        </button>

        {getVisiblePageNumbers().map((num, index) =>
          typeof num === "number" ? (
            <button key={index} className={num === currentPage ? "activePage" : ""} onClick={() => setCurrentPage(num)}>
              {num}
            </button>
          ) : (
            <span key={index} className="dots">...</span>
          )
        )}

        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
          Next
        </button>

        <select
          value={rowsPerPage}
          onChange={(e) => {
            setRowsPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}
        >
          {rowsPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option} rows
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};



export default Pagination;