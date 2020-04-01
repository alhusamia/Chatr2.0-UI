import React from "react";
const Message = props => {
  return (
    <div className="speech-bubble my-3 mx-5 pl-5">
      <small className="text-success">
        <h6>{props.msg.username}</h6>
      </small>
      <h5 className="text-left fixscroll">{props.msg.message}</h5>
      <small>
        {" "}
        {props.msg.timestamp.slice(0, 10)} at:{" "}
        {props.msg.timestamp.slice(11, 19)}{" "}
      </small>
    </div>
  );
};
export default Message;
