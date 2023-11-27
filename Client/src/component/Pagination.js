// PaginationComponent.js

import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationComponent = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  return (
    <Stack spacing={2} direction="row" justifyContent="center">
      <Pagination
        count={Math.ceil(totalItems / itemsPerPage)}
        page={currentPage}
        onChange={onPageChange}
        color="primary"
        shape="rounded" // Use rounded shape
        size="large" // Use a larger size
        showFirstButton
        showLastButton
      />
    </Stack>
  );
};

export default PaginationComponent;
