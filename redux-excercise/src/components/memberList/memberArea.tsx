import * as React from "react";
import { MemberTableComponent } from "./components/memberTable";
import { MemberEntity } from "../../model/member";
import Input from "@material-ui/core/Input";
import { Grid, IconButton } from "@material-ui/core";
import Search from "@material-ui/icons/Search";

interface Props {
  members: Array<MemberEntity>;
  loadMembers: (organizationName: string) => any;
  updateFilter: (filter: string) => any;
  organizationName: string;
}

export class MemberAreaComponent extends React.Component<Props> {
  public render() {
    return (
      <>
        <Grid container justify="center">
          <Grid item>
            <Input
              type="text"
              value={this.props.organizationName}
              onChange={e => this.props.updateFilter(e.target.value)}
            />
          </Grid>
          <Grid item>
            <IconButton
              onClick={() =>
                this.props.loadMembers(this.props.organizationName)
              }
            >
              <Search />
            </IconButton>
          </Grid>
        </Grid>
        <MemberTableComponent members={this.props.members} />
      </>
    );
  }
}
