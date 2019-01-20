import * as React from "react";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import Search from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";

interface Props {
  organizationName: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  loadMembers: () => void;
}

export const OrganizationNameEdit = (props: Props) => (
  <Grid container justify="center">
    <Grid item>
      <Input
        type="text"
        value={props.organizationName}
        onChange={props.onChange}
      />
    </Grid>
    <Grid item>
      <IconButton onClick={props.loadMembers}>
        <Search />
      </IconButton>
    </Grid>
  </Grid>
);
