import React, { useState, ReactNode } from "react";
import "./Pagination.css";

interface PaginationProps {
  rows: ReactNode[]; // Pass rows as a prop
  rowsPerPageOptions?: number[];
  defaultRowsPerPage?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  rows,
  rowsPerPageOptions = [5, 10, 15],
  defaultRowsPerPage = 5,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

  const totalRows = rows.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

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

  return (
    <div className="paginationContainer">
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>{paginatedRows}</tbody>
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