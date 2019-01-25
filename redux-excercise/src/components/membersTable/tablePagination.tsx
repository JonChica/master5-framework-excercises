import * as React from "react";
import { TableFooter, TableRow, TablePagination } from "@material-ui/core";

interface Props {
  rows: number;
  rowsPerPage: number;
  page: number;
  handleChangePage: (event, page) => void;
  handleChangeRowsPerPage: (event) => void;
}

export const MembersTablePagination = (props: Props) => (
  <TableFooter>
    <TableRow>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        count={props.rows}
        rowsPerPage={props.rowsPerPage}
        page={props.page}
        onChangePage={props.handleChangePage}
        onChangeRowsPerPage={props.handleChangeRowsPerPage}
        backIconButtonProps={{
          "aria-label": "Previous Page"
        }}
        nextIconButtonProps={{
          "aria-label": "Next Page"
        }}
      />
    </TableRow>
  </TableFooter>
);
