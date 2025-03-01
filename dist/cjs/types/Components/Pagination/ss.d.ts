import React, { ReactNode } from "react";
import "./Pagination.css";
interface PaginationProps {
    rows: ReactNode[];
    rowsPerPageOptions?: number[];
    defaultRowsPerPage?: number;
}
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
