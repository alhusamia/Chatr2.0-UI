import { fetchChannel } from "../redux/actions";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AddMessage from "./AddMessage";
import Message from "./Message";
class Channel extends Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      const channelID = this.props.match.params.channelID;
      this.props.fetchChannel(channelID);
    }, 3000);
  }
  componentDidUpdate(prevProps) {
    let channelID = this.props.match.params.channelID;
    if (channelID !== prevProps.match.params.channelID) {
      this.props.fetchChannel(channelID);
    } else {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.props.fetchChannel(this.props.match.params.channelID);
      }, 3000);
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    if (!this.props.user) return <Redirect to="/welcome" />;
    const messages = this.props.messages.map(message => (
      <Message key={`${message.id}`} msg={message} user={this.props.user} />
    ));
    return (
      <div className="abc" style={{ color: "white" }}>
        <div className="channel">{messages}</div>
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
    fetchChannel: channelID => dispatch(fetchChannel(channelID))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Channel);
