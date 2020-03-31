import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const SuperSecretPage = ({ user }) => {
  if (!user) return <Redirect to="/login" />;

  return <div></div>;
};

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps)(SuperSecretPage);
