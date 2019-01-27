import * as React from "react";
import { MemberEntity } from "../../../model/member";
import { TableRow, TableCell, Avatar } from "@material-ui/core";

interface Props {
  member: MemberEntity;
}

export const MemberRowComponent = (props: Props) => {
  return (
    <TableRow>
      <TableCell>
        <Avatar
          src={props.member.avatar_url}
          style={{ width: 80, height: 80 }}
        />
      </TableCell>
      <TableCell>
        <span>{props.member.id}</span>
      </TableCell>
      <TableCell>
        <span>{props.member.login}</span>
      </TableCell>
    </TableRow>
  );
};
