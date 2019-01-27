import * as React from "react";
import { MemberEntity } from "../../../model/member";
import { MemberRowComponent } from "./memberRow";
import Typography from "@material-ui/core/Typography";
import {
  Grid,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";

interface Props {
  members: MemberEntity[];
}

export const MemberTableComponent = (props: Props) => {
  return (
    <>
      <Typography variant="h4" gutterBottom align="center">
        Members Page
      </Typography>
      <Grid container justify="center">
        <Grid item md={6}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Avatar</TableCell>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.members.map((member: MemberEntity) => (
                <MemberRowComponent key={member.id} member={member} />
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </>
  );
};
