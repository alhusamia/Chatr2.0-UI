import { fetchChannel, addMessage } from "../redux/actions";
import React, { Component } from "react";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AddMessage from "./AddMessage";

class Channel extends Component {
  componentDidMount() {
    const channelID = this.props.match.params.channelID;
    this.props.fetchChannel(channelID);
  }
  componentDidUpdate(prevProps) {
    let channelID = this.props.match.params.channelID;
    if (channelID !== prevProps.match.params.channelID) {
      this.props.fetchChannel(channelID);
    }
    // else {
    //   this.props.fetchChannel(channelID);
    // }
  }

  render() {
    if (!this.props.user) return <Redirect to="/welcome" />;

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
