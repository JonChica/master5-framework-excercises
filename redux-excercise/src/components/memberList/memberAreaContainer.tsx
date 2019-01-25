import { connect } from 'react-redux';
import { memberRequest } from '../../actions/memberRequest';
import { MemberAreaComponent } from './memberArea';
import { State } from '../../reducers';

const mapStateToProps = (state  :State) => {
  return{
      members: state.memberReducer
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMembers: (organizationName) => {return dispatch(memberRequest(organizationName))}
  };
}

export const MembersAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberAreaComponent);
