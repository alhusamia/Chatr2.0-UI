import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ChatBott from "./ChatBott";

const SuperSecretPage = ({ user }) => {
  if (!user) return <Redirect to="/login" />;
  for (let i = 0; i < 16; )
    return (
      <div className="supersecret">
        <h2 className="display-4 pt-5">Welcome To Super Secret ChatRoom !!!</h2>
        <h3 className="display-5">Choose you channel or Create One !!!</h3>

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
