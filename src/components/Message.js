import React, { Component } from "react";
class Message extends Component {
  validURL = str => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  };
  checkImageURL(url) {
    return url.match(/.(jpeg|jpg|gif|png)$/) != null;
  }
  render() {
    return (
      <div
        className={
          this.props.msg.username === this.props.user.username
            ? `speech-bubble2 my-3 mx-5 pl-4 pt-2 pb-2 pr-4`
            : `speech-bubble my-3 mx-5 pl-4 pt-2 pb-2 pr-4`
        }
      >
        <small style={{ color: "#FFDB58" }}>
          <h6>{this.props.msg.username}</h6>
        </small>
        {this.validURL(this.props.msg.message) ||
        this.checkImageURL(this.props.msg.message) ? (
          <img src={`${this.props.msg.message}`} width="50%" />
        ) : (
          <h5 className="text-left fixscroll">{this.props.msg.message}</h5>
        )}
        <p>
          {this.props.msg.timestamp ? (
            <small>
              {this.props.msg.timestamp.slice(0, 10)} at:{" "}
              {this.props.msg.timestamp.slice(11, 19)}{" "}
            </small>
          ) : (
            ""
          )}
        </p>
      </div>
    );
  }
}
export default Message;
