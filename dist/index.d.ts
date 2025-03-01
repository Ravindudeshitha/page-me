import React from 'react';

interface PaginationProps {
    children: React.ReactNode;
    rowsPerPageOptions?: number[];
    defaultRowsPerPage?: number;
    styleNumber?: number;
    designTemplate?: boolean;
}
declare const Pagination: React.FC<PaginationProps>;

export { Pagination };
