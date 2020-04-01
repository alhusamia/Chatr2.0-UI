import React from "react";

const Message = props => {
  return (
    <div className="px-3 py-3 mb-3 rounded-sm border border-white mr-5 ml-5">
      <small className="text-success">
        <h6>{props.msg.username}</h6>
      </small>
      <h5 className="text-left">{props.msg.message}</h5>
      <small>
        {" "}
        {props.msg.timestamp.slice(0, 10)} at:{" "}
        {props.msg.timestamp.slice(11, 19)}{" "}
      </small>
    </div>
  );
};
export default Message;
