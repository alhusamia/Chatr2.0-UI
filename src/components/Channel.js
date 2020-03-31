import { fetchChannel, addMessage } from "../redux/actions";
import React, { Component } from "react";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AddMessage from "./AddMessage";
import bg from "../assets/images/bg.jpg"; // <-- Not being used anywhere, either remove the import or use it.

class Channel extends Component {
  componentDidMount() {
    const channelID = this.props.match.params.channelID;
    this.props.fetchChannel(channelID);
  }

  // For clarity, I'd rename the prop to prevProps.
  componentDidUpdate(props) {
    let channelID = this.props.match.params.channelID;
    if (channelID !== props.match.params.channelID) {
      this.props.fetchChannel(channelID);
    }
    // else {
    //   this.props.fetchChannel(channelID);
    // }
  }

  render() {
    if (!this.props.user) return <Redirect to="/welcome" />;

    /*
     *
     * Move the .map() to outside the return.
     * That'll make it easier later to customize how
     * a message is displayed.
     *
     */
    return (
      <div style={{ color: "white" }}>
        <div>
          {this.props.messages.map(message => {
            return <h2>{message.message}</h2>;
          })}
        </div>
        <div>
          <AddMessage channelID={this.props.match.params.channelID} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    messages: state.channels.messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChannel: channelID => dispatch(fetchChannel(channelID))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
