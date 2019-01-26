import * as React from "react";
import { MemberTableComponent } from "./components/memberTable";
import { MemberEntity } from "../../model/member";

interface Props {
  members: Array<MemberEntity>;
  loadMembers: (organizationName: string) => any;
  updateFilter: (filter: string) => any;
  organizationName: string;
}

export class MemberAreaComponent extends React.Component<Props> {
  public render() {
    return (
      <div>
        <br />
        <input
          type="text"
          value={this.props.organizationName}
          onChange={e => this.props.updateFilter(e.target.value)}
        />
        <input
          type="submit"
          value="load"
          className="btn btn-default"
          onClick={() => this.props.loadMembers(this.props.organizationName)}
        />
        <MemberTableComponent members={this.props.members} />
      </div>
    );
  }
}
