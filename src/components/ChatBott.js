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
          message: "What is your name?",
          trigger: "2"
        },
        {
          id: "2",
          user: true,
          trigger: "3"
        },
        {
          id: "3",
          message: "Hi {previousValue}, nice to meet you!",
          trigger: "4"
        },
        {
          id: "4",
          message: "How can I help you?",
          trigger: "5"
        },
        {
          id: "5",
          options: [
            { value: 1, label: "Add Channel", trigger: "6" },
            { value: 2, label: "Find Channel", trigger: "7" },
            { value: 3, label: "Nothing", trigger: "8" }
          ]
        },
        {
          id: "6",
          component: <Link to="/createChannel">Click Here</Link>,
          end: true
        },
        {
          id: "7",
          message: "You have a search bar on the right",
          end: true
        },
        {
          id: "8",
          message: "Have a good time!",
          end: true
        }
      ]}
    />
  );
};
export default ChatBott;
