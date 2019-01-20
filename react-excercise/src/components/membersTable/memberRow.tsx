import * as React from "react";
import { MemberEntity } from "../../model/member";
import { TableRow, TableCell, Avatar, IconButton } from "@material-ui/core";
import Person from "@material-ui/icons/Person";
import { Link } from "react-router-dom";

interface Props {
  member: MemberEntity;
}

export const MemberRow = (props: Props) => (
  <TableRow>
    <TableCell>
      <Avatar src={props.member.avatar_url} style={{ width: 80, height: 80 }} />
    </TableCell>
    <TableCell>
      <span>{props.member.id}</span>
    </TableCell>
    <TableCell>
      <span>{props.member.login}</span>
    </TableCell>
    <TableCell>
      <Link to={`/details/${props.member.login}`}>
        <IconButton>
          <Person />
        </IconButton>
      </Link>
    </TableCell>
  </TableRow>
);
