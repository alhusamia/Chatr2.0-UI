import { fetchChannel} from "../redux/actions";
import React, { Component } from "react";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


class Channel extends Component {
  componentDidMount() {
      const channelID = this.props.match.params.channelID;
      this.props.fetchChannel(channelID);
  }
  componentDidUpdate(props) {
    let channelID = this.props.match.params.channelID;
    if (channelID !== props.match.params.channelID) {
      this.props.fetchChannel(channelID);
    } else {
        this.props.fetchChannel(channelID);
    }
  }


  render() {
    if (!this.props.user) return <Redirect to="/welcome" />;
    
    return (
      <div>
        {this.props.messages.map(message => {
            return (
              <div>
                <br />
              
                  <h2>{message.message}</h2>
                </div>
             
            );
          })
        }
        <br />;
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    messages:state.channels.messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChannel: channelID => dispatch(fetchChannel(channelID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel);