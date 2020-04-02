import React from "react";
import ChatBot from "react-simple-chatbot";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";

/**
 * I'm interested to see where this goes
 */

const ChatBott = () => {
  const config = {
    width: "300px",
    height: "400px",
    floating: true
  };
  const theme = {
    background: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    headerBgColor: "#04c068",
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#01132b",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4c4c4c"
  };
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="HelpBot"
        // recognitionEnable={true}
        // speechSynthesis={{ enable: true, lang: "en" }}
        {...config}
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
            message: "You have a search bar on the left",
            trigger: "2"
          },
          {
            id: "5",
            message: "Have a good time!",
            end: true
          }
        ]}
      />
    </ThemeProvider>
  );
};
export default ChatBott;
