import React from "react";
import MessageTable from "./MessageTable";
import {connect} from "react-redux";

const MessageList =(props)=>{
    return(
        <div>
            <MessageTable messages= {props.messages}/>
        </div>
    )
}
const mapStateToProps = state => ({
    messages: state.messages
  });
  export default connect(mapStateToProps)(MessageList);