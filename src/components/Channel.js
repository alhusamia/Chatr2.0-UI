import { fetchMessages } from "../redux/actions";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AddMessage from "./AddMessage";
import Message from "./Message";
import { CLEAR_MESSAGES } from "../redux/actions/actionTypes";

class Channel extends Component {
  getMessagesInterval() {
    this.interval = setInterval(() => {
      const messages = this.props.messages;
      let timestamp = "";
      if (messages.length) timestamp = messages[messages.length - 1].timestamp;
      const channelID = this.props.match.params.channelID;
      this.props.fetchMessages(channelID, timestamp);
    }, 3000);
  }
  componentDidMount() {
    this.getMessagesInterval();
  }
  componentDidUpdate(prevProps) {
    let channelID = this.props.match.params.channelID;
    let element = document.getElementById("last");
    element.scrollIntoView({ behavior: "smooth" });

    if (channelID !== prevProps.match.params.channelID) {
      this.props.clearMessages();
      clearInterval(this.interval);
      this.getMessagesInterval();
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    if (!this.props.user)
      return (
        <div id="last">
          <Redirect to="/welcome" />
        </div>
      );
    const messages = this.props.messages.map((message, index) => (
      <Message key={`${message.id}`} msg={message} user={this.props.user} />
    ));
    return (
      <div className="abc" style={{ color: "white" }}>
        <div className="channel">
          {messages}
          <div id="last"></div>
        </div>
        <div className="mr-5 mb-0 mt-auto">
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
    clearMessages: () => dispatch({ type: CLEAR_MESSAGES }),
    fetchMessages: (channelID, timestamp) =>
      dispatch(fetchMessages(channelID, timestamp))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Channel);
