import React from "react";
import MessageRow from "./MessageRow";


const MessageTable = ({messages}) =>{
 const messageRow = messages.map(message => <MessageRow key={message.title} message={message} />);
  return (
    <div className="mt-3 table">
      <div className="Main">{messageRow}</div>
    </div>
  );
}

export default MessageTable;