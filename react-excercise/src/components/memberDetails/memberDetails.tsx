import * as React from "react";
import { MemberDetails, createDefaultMemberDetails } from "../../model/member";
import { memberAPI } from "../../api/memberAPI";
import { RouteComponentProps, Link } from "react-router-dom";
import {
  Avatar,
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
  List,
  ListItem,
  Grid
} from "@material-ui/core";

interface Props extends RouteComponentProps<any>, React.Props<any> {}
interface State {
  member: MemberDetails;
}

export class MemberDetailsComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      member: createDefaultMemberDetails()
    };
  }

  componentDidMount() {
    memberAPI
      .getMemberDetail(this.props.match.params.userName)
      .then(member => this.setState({ member }));
  }

  public render() {
    return (
      <Grid container justify="center">
        <Card>
          <CardHeader
            avatar={
              <Avatar
                src={this.state.member.avatar_url}
                style={{ width: 80, height: 80 }}
              />
            }
            title={this.state.member.name}
          />
          <CardContent>
            <List>
              <ListItem>Login: {this.state.member.login}</ListItem>
              <ListItem>Location: {this.state.member.location}</ListItem>
              <ListItem>Id: {this.state.member.id}</ListItem>
              <ListItem>Company: {this.state.member.company}</ListItem>
              <ListItem>Blog: {this.state.member.blog}</ListItem>
            </List>
          </CardContent>
          <CardActions>
            <Link to="/home">
              <Button size="small" color="secondary">
                New Search
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}
