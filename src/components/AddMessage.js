import React, { Component } from "react";
import { connect } from "react-redux";
import { addMessage } from "../redux/actions";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import ReactGiphySearchbox from "react-giphy-searchbox";
class AddMessage extends Component {
  state = {
    message: "",
    showEmojis: false
  };
  showEmojis = e => {
    this.setState(
      {
        showEmojis: true
      },
      () => document.addEventListener("click", this.closeMenu)
    );
  };
  addEmoji = e => {
    let emoji = e.native;
    this.setState({
      message: this.state.message + emoji
    });
  };
  addGif = e => {
    let gif = e;
    this.setState({
      message: this.state.message + gif
    });
  };
  closeMenu = e => {
    console.log(this.emojiPicker);
    if (this.emojiPicker !== null && !this.emojiPicker.contains(e.target)) {
      this.setState(
        {
          showEmojis: false
        },
        () => document.removeEventListener("click", this.closeMenu)
      );
    }
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
    return (
      <div className="col-12 col-sm-12 col-md-12 col-xl-12">
        <div className="form-group col-lg-12 col-12  ">
          <form onSubmit={event => this.onSubmitForm(event)}>
            <div className="input-group my-3 ml-5  ">
              <input
                className="form-control "
                type="text"
                name="message"
                value={this.state.message}
                onChange={event => this.handleChange(event)}
                placeholder="Type a Message..."
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  {this.state.showEmojis ? (
                    <span ref={el => (this.emojiPicker = el)}>
                      <Picker
                        onSelect={this.addEmoji}
                        emojiTooltip={true}
                        title="Team AYO"
                      />
                    </span>
                  ) : (
                    <p
                      onClick={this.showEmojis}
                      style={{ marginBottom: "0px" }}
                    >
                      {String.fromCodePoint(0x1f60a)}
                    </p>
                  )}
                </span>
                <ReactGiphySearchbox
                  apiKey="bSJg47GJZuW3BkIpnk1M0wabPfVpNntc"
                  onSelect={item => this.addGif(item.images.original.url)}
                />
              </div>
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
