import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ChatBott from "./ChatBott";

const SuperSecretPage = ({ user }) => {
  if (!user) return <Redirect to="/login" />;
  return (
    <div className="supersecret">
      <div className="hello">
        <h2 className="display-4 pt-5">Welcome To Super Secret ChatRoom !!!</h2>
      </div>
      <div className="hello1">
        <h3 className="display-5">Choose you channel or Create One !!!</h3>
      </div>
      <span className="container justify-content-right">
        <ChatBott />
      </span>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps)(SuperSecretPage);
