import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import AddButton from "./AddButton";

const SuperSecretPage = ({ user }) => {
  if (!user) return <Redirect to="/login" />;

  return (
    <div>
      <AddButton/>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps)(SuperSecretPage);
