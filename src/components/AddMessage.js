import React, { Component } from "react";
import { connect } from "react-redux";
import { addMessage } from "../redux/actions";
class AddMessage extends Component {
  state = {
    message: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmitForm = event => {
    event.preventDefault();
    this.props.addMessage(this.state, this.props.channelID);
    this.setState({ message: "" });
  };
  render() {
    console.log(this.state.message, this.props.channelID, "my console");

    return (
      <div className="col-12 col-sm-12 col-md-12 col-xl-12">
        <div className="form-group col-lg-12 col-12  ">
          <form onSubmit={event => this.onSubmitForm(event)}>
            <div className="input-group my-3">
              <input
                className="form-control "
                type="text"
                name="message"
                value={this.state.message}
                onChange={event => this.handleChange(event)}
                placeholder="Type a Message..."
              />
              <button typeof="submit">
                <i
                  className="fa fa-plus lg"
                  style={{
                    fontSize: "30px",
                    color: "#000000",
                    cursor: "pointer"
                  }}
                ></i>
              </button>
            </div>
          </form>
        </div>
      </div>
  
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMessage: (message, channelID) => dispatch(addMessage(message, channelID))
});
export default connect(null, mapDispatchToProps)(AddMessage);
