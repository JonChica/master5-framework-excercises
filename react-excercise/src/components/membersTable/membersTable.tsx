import * as React from "react";
import { MemberEntity } from "../../model/member";
import { memberAPI } from "../../api/memberAPI";
import { MemberRow } from "./memberRow";
import { MemberHead } from "./memberHead";
import { OrganizationNameEdit } from "./organizationNameEdit";
import Typography from "@material-ui/core/Typography";
import { Table, TableHead, TableBody, Grid } from "@material-ui/core";
import { MembersTablePagination } from "./tablePagination";

interface Props {}

interface State {
  members: Array<MemberEntity>;
  organizationName: string;
  rows: number;
  rowsPerPage: number;
  page: number;
}

export class MembersTableComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      members: [],
      organizationName: "lemoncode",
      rows: 0,
      rowsPerPage: 5,
      page: 0
    };
  }

  setOrganizationName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ organizationName: event.target.value });
  };

  loadMembers = () => {
    memberAPI
      .getAllMembersWithOctokit(this.state.organizationName)
      .then(members =>
        this.setState({ members: members, rows: members.length, page: 0 })
      );
  };

  onChangePage = (event, page) => {
    this.setState({ page });
  };

  onChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  public render() {
    return (
      <div>
        <Typography variant="h4" gutterBottom align="center">
          Github Organizations Members
        </Typography>
        <OrganizationNameEdit
          onChange={this.setOrganizationName}
          organizationName={this.state.organizationName}
          loadMembers={this.loadMembers}
        />
        {this.state.members.length > 0 ? (
          <Grid container justify="center">
            <Grid item md={6}>
              <Table>
                <TableHead>
                  <MemberHead />
                </TableHead>
                <TableBody>
                  {this.state.members
                    .slice(
                      this.state.page * this.state.rowsPerPage,
                      this.state.page * this.state.rowsPerPage +
                        this.state.rowsPerPage
                    )
                    .map((member: MemberEntity) => (
                      <MemberRow key={member.id} member={member} />
                    ))}
                </TableBody>
                <MembersTablePagination
                  rowsPerPage={this.state.rowsPerPage}
                  rows={this.state.rows}
                  page={this.state.page}
                  handleChangePage={this.onChangePage}
                  handleChangeRowsPerPage={this.onChangeRowsPerPage}
                />
              </Table>
            </Grid>
          </Grid>
        ) : (
          <Typography variant="h5" align="center" color="textSecondary">
            Enter some organization name
          </Typography>
        )}
      </div>
    );
  }
}
