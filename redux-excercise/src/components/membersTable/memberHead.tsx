import * as React from "react";
import { TableRow, TableCell } from "@material-ui/core";

export const MemberHead = () => (
  <TableRow>
    <TableCell>Avatar</TableCell>
    <TableCell>Id</TableCell>
    <TableCell>Name</TableCell>
    <TableCell>Details</TableCell>
  </TableRow>
);
