import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Welcome = ({ user }) => {
  if (user) return <Redirect to="/private" />;
  return (
    <header className="welcome">
      <div className="container  text-center my-auto z-1 pt-5">
        <h1 className="mb-3 hello2">WELCOME TO AYO Chat</h1>
        <h3 className="mb-5 hello3">
          <em>You're gonna need to login to see the messages</em>
        </h3>
        <Link to="/login" className="btn btn-success btn-lg mb-5">
          Login
        </Link>
      </div>
      <div className="overlay z-0" />
    </header>
  );
};

const mapStateToProps = ({ user }) => ({
  user
});
export default connect(mapStateToProps)(Welcome);
