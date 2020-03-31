import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {logout} from '../../redux/actions'

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faSignInAlt,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";

const AuthButton = ({ user,logout }) => {
  let buttons = [
    <li key="loginButton" className="nav-item">
      <Link to="/login" className="nav-link">
        <FontAwesomeIcon icon={faSignInAlt} /> Login
      </Link>
    </li>,
    <li key="signupButton" className="nav-item">
      <Link to="/signup" className="nav-link">
        <FontAwesomeIcon icon={faUserPlus} /> Signup
      </Link>
    </li>
  ];

  if (user) {
    buttons = (
      <>
        <span className="nav-link" style={{color:"white"}}>{user.username}</span>
        <li className="nav-item">
          <span className="nav-link" onClick={logout}>
            <FontAwesomeIcon  icon={faSignOutAlt} /> Logout
          </span>
        </li>
      </>
    );
  }

  return <ul className="navbar-nav ml-auto">{buttons}</ul>;
};

const mapStateToProps = ({ user }) => ({
  user
});
const mapDispatchToProps = dispatch =>({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps,mapDispatchToProps)(AuthButton);
