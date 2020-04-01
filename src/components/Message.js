import React from "react";
const Message = props => {
  return (
    <div
      className={
        props.msg.username === props.user.username
          ? `speech-bubble2 my-3 mx-5 pl-5 pt-2 pb-2`
          : `speech-bubble my-3 mx-5 pl-5 pt-2 pb-2`
      }
    >
      <small style={{ color: "#FFDB58" }}>
        <h6>{props.msg.username}</h6>
      </small>
      <h5 className="text-left fixscroll">{props.msg.message}</h5>
      {props.msg.timestamp ? (
        <small>
          {props.msg.timestamp.slice(0, 10)} at:{" "}
          {props.msg.timestamp.slice(11, 19)}{" "}
        </small>
      ) : (
        ""
      )}
    </div>
  );
};
export default Message;
