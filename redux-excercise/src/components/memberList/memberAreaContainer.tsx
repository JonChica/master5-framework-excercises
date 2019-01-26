import { connect } from "react-redux";
import { memberRequest } from "../../actions/memberRequest";
import { MemberAreaComponent } from "./memberArea";
import { State } from "../../reducers";
import { filterChange } from "../../actions/filterChange";

const mapStateToProps = (state: State) => {
  return {
    members: state.memberReducer,
    organizationName: state.memberFilterReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadMembers: organizationName => dispatch(memberRequest(organizationName)),
    updateFilter: filterName => dispatch(filterChange(filterName))
  };
};

export const MembersAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberAreaComponent);
