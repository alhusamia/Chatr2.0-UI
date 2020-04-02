import React from "react";
import { Link, Redirect } from "react-router-dom";

// Components
import SideNav from "./SideNav";
import AuthButton from "./AuthButton";
import { connect } from "react-redux";

const NavBar = ({ user }) => (
  <nav
    className="navbar navbar-expand-lg navbar-dark fixed-top"
    style={{ backgroundColor: "#051129" }}
    id="mainNav"
  >
    <Link style={{color:"#04c068"}}className="navbar-brand" to="/welcome">     
      AYO Chat
    </Link>
    {!user && <Redirect to="/welcome" />}

    <button
      className="navbar-toggler navbar-toggler-right"
      type="button"
      data-toggle="collapse"
      data-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
     
      {user && <SideNav />}
      <AuthButton />
    </div>
  </nav>
);
const mapStateToProps = ({ user }) => ({
  user
});
export default connect(mapStateToProps)(NavBar);
