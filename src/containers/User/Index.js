import { connect } from "react-redux";
import UserIndex from "../../components/User/Index";
import { addUser, inputChange } from "../../actions/users";

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addUser(user) {
      dispatch(addUser(user));
    },
    inputChange(target, val) {
      dispatch(inputChange(target, val));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserIndex);
