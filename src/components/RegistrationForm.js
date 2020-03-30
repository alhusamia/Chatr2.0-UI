import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { signup, login } from "../redux/actions";
import { connect } from "react-redux";

class RegistationForm extends Component {
  state = {
    username: "",
    password: ""
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  /**
   * 30-03-20 @octowl
   *
   * You can lose a lot of the logic by having a unified
   * action function that takes the `type` as a second parameter
   *
   * e.g. `this.props.authenticate(this.state, type)`
   */

  submitHandler = e => {
    e.preventDefault();
    const type = this.props.match.url.substring(1);
    {
      // <--- what's this for? :/
      type === "login"
        ? this.props.login(this.state)
        : this.props.signup(this.state);
    }
  };

  render() {
    const type = this.props.match.url.substring(1);
    const { errors } = this.props;
    if (this.props.user) return <Redirect to="/private" />;
    return (
      <div className="card col-6 mx-auto p-0 mt-5">
        <div className="card-body">
          <h5 className="card-title mb-4">
            checkout
            {type === "login"
              ? "Login to send messages"
              : "Register an account"}
          </h5>
          <form onSubmit={this.submitHandler}>
            {!!errors.length && (
              <div className="alert alert-danger" role="alert">
                {errors.map(error => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            )}
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.changeHandler}
              />
            </div>
            <input
              className="btn btn-primary"
              type="submit"
              value={type.replace(/^\w/, c => c.toUpperCase())}
            />
          </form>
        </div>
        <div className="card-footer">
          <Link
            to={type === "login" ? "/signup" : "/login"}
            className="btn btn-small btn-link"
          >
            {type === "login"
              ? "register an account"
              : "login with an existing account"}
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    errors: state.errors.errors,
    user: state.user
  };
};
const mapDispatchToProps = dispatch => ({
  login: userData => dispatch(login(userData)),
  signup: userData => dispatch(signup(userData))
});
export default connect(mapStateToProps, mapDispatchToProps)(RegistationForm);
