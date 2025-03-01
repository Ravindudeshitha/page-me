// import React, { useState } from 'react';

// interface PaginationProps {
//   children: React.ReactNode;
//   itemsPerPage: number;
// }

// const Pagination: React.FC<PaginationProps> = ({ children, itemsPerPage }) => {
//   // Get the table element and find tbody
//   const table = React.Children.toArray(children).find(child => {
//     return React.isValidElement(child) && child.type === 'table';
//   });
//   console.log(children);
//   // Extract rows from the table tbody if available
//   const tbody = React.Children.toArray(table?.props.children).find(child => {
//     return React.isValidElement(child) && child.type === 'tbody';
//   });

//   // Get all rows in tbody
//   const rows = React.Children.toArray(tbody?.props.children);

//   // Manage current page
//   const [currentPage, setCurrentPage] = useState(1);

//   // Calculate the total pages
//   const totalPages = Math.ceil(rows.length / itemsPerPage);
//   console.log(rows.length);

//   // Get the items for the current page
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentItems = rows.slice(startIndex, startIndex + itemsPerPage);

//   // Handle page change
//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div>
//       <table>
//         <thead>{table?.props.children[0]}</thead> {/* First element is the thead */}
//         <tbody>{currentItems}</tbody>
//       </table>
      
//       {/* Pagination Controls */}
//       <div>
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>
        
//         <span>Page {currentPage} of {totalPages}</span>
        
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Pagination;
