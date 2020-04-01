import React from "react";
import ChatBot from "react-simple-chatbot";
import { Link } from "react-router-dom";

const ChatBott = () => {
  return (
    <ChatBot
      headerTitle="Speech Recognition"
      // recognitionEnable={true}
      // speechSynthesis={{ enable: true, lang: "en" }}
      steps={[
        {
          id: "1",
          message: "How can I help you?",
          trigger: "2"
        },
        {
          id: "2",
          options: [
            { value: 1, label: "Add Channel", trigger: "3" },
            { value: 2, label: "Find Channel", trigger: "4" },
            { value: 3, label: "Nothing", trigger: "5" }
          ]
        },
        {
          id: "3",
          component: <Link to="/createChannel">Click Here</Link>,
          trigger: "2"
        },
        {
          id: "4",
          message: "You have a search bar on the right",
          trigger: "2"
        },
        {
          id: "5",
          message: "Have a good time!",
          end: true
        }
      ]}
    />
  );
};
export default ChatBott;
