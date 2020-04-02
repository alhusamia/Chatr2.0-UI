import React, { Component } from "react";
import { connect } from "react-redux";
import { addMessage } from "../redux/actions";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import ReactGiphySearchbox from "react-giphy-searchbox";
class AddMessage extends Component {
  state = {
    message: "",
    showEmojis: false,
    showGif: false
  };
  showEmojis = e => {
    this.setState(
      {
        showEmojis: true
      },
      () => document.addEventListener("click", this.closeMenu)
    );
  };
  showGif = e => {
    this.setState(
      {
        showGif: true
      },
      () => document.addEventListener("click", this.closemenu)
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
  closemenu = e => {
    if (this.gifPicker !== null && !this.gifPicker.contains(e.target)) {
      this.setState(
        {
          showGif: false
        },
        () => document.removeEventListener("click", this.closemenu)
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
              </div>
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
                  {this.state.showGif ? (
                    <span ref={el => (this.gifPicker = el)}>
                      <ReactGiphySearchbox
                        apiKey="bSJg47GJZuW3BkIpnk1M0wabPfVpNntc"
                        onSelect={item => this.addGif(item.images.original.url)}
                      />
                    </span>
                  ) : (
                    <p onClick={this.showGif} style={{ marginBottom: "0px" }}>
                      GIF
                    </p>
                  )}
                </span>
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
