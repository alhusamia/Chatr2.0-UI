import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { addChannel } from "../redux/actions";
class ChannelForm extends Component {
  state = {
    name: "",
    image_url: ""
  };
  submitChannel = event => {
    event.preventDefault();
    this.props.addChannel(this.state, this.props.history);
  };
  onTextchange = event =>
    this.setState({ [event.target.name]: event.target.value });
  render() {
    if (!this.props.user) return <Redirect to="/Welcome" />;
    return (
      <div className="mt-5 p-2 secret">
        <p className="errorMessage">
          {this.props.errors ? this.props.errors : ""} <br />
        </p>
        <form onSubmit={this.submitChannel}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Name</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.onTextchange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Image URL</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="image_url"
              onChange={this.onTextchange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  errors: state.errors.errors,
  user: state.user
});
const mapDispatchToProps = dispatch => {
  return {
    addChannel: newChannel => dispatch(addChannel(newChannel))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChannelForm);
