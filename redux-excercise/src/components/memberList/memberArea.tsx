import * as React from "react";
import { MemberTableComponent } from "./components/memberTable";
import { MemberEntity } from "../../model/member";

interface Props {
  members: Array<MemberEntity>;
  loadMembers: (organizationName: string) => any;
}

interface State {
  organizationName: string;
}

export class MemberAreaComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      organizationName: "lemoncode"
    };
  }

  setOrganizationName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ organizationName: event.target.value });
  };

  public render() {
    return (
      <div>
        <MemberTableComponent members={this.props.members} />
        <br />
        <input
          type="text"
          name="organizationName"
          onChange={this.setOrganizationName}
        />
        <input
          type="submit"
          value="load"
          className="btn btn-default"
          onClick={() => this.props.loadMembers(this.state.organizationName)}
        />
      </div>
    );
  }
}
