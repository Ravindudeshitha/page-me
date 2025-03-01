import React from 'react';
import "./Pagination.css";
interface PaginationProps {
    children: React.ReactNode;
    rowsPerPageOptions?: number[];
    defaultRowsPerPage?: number;
    styleNumber?: number;
    designTemplate?: boolean;
}
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
