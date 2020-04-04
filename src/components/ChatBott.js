import React from "react";
import ChatBot from "react-simple-chatbot";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import avatar from "../assets/images/avatar.jpg";
import user from "../assets/images/user.png";
import Random from "./Random";
const ChatBott = () => {
  const config = {
    width: "350px",
    height: "500px",
    floating: true,
  };
  const theme = {
    background: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    headerBgColor: "#04c068",
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#04c068",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4c4c4c",
  };

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="AYO Chatter"
        // recognitionEnable={true}
        // speechSynthesis={{ enable: true, lang: "en" }}
        botAvatar={avatar}
        userAvatar={user}
        {...config}
        steps={[
          {
            id: "1",
            message: "AYO my friend and Welcome!",
            trigger: "2",
          },
          {
            id: "2",
            message: "How can I help you?",
            trigger: "3",
          },
          {
            id: "3",
            options: [
              { value: 1, label: "Add Channel", trigger: "4" },
              { value: 2, label: "Find Channel", trigger: "5" },
              { value: 3, label: "I'm bored", trigger: "6" },
            ],
          },
          {
            id: "4",
            component: <Link to="/createChannel">Click Here</Link>,
            trigger: "3",
          },
          {
            id: "5",
            component: (
              <h5 style={{ color: "black" }}>
                AYO open your eyes, the <em>search bar</em> is on the TOP!
              </h5>
            ),
            trigger: "3",
          },
          {
            id: "6",
            message: "What would you like to do?",
            trigger: "7",
          },
          {
            id: "7",
            options: [
              { value: 1, label: "Random Things", trigger: "14" },
              { value: 2, label: "Listen to music", trigger: "8" },
              { value: 3, label: "Idk", trigger: "15" },
            ],
          },
          {
            id: "8",
            message: "Choose your list",
            trigger: "9",
          },
          {
            id: "9",
            options: [
              { value: 1, label: "Classic", trigger: "10" },
              { value: 2, label: "Electronic", trigger: "11" },
              { value: 3, label: "Pop", trigger: "12" },
              { value: 4, label: "I want to choose", trigger: "13" },
            ],
          },
          {
            id: "10",
            component: (
              <a
                href="https://www.youtube.com/playlist?list=PLcGkkXtask_fpbK9YXSzlJC4f0nGms1mI"
                target="_blank"
                rel="noopener noreferrer"
              >
                Classic
              </a>
            ),
            trigger: "7",
          },
          {
            id: "11",
            component: (
              <a
                href="https://www.youtube.com/playlist?list=PLr0CT5anc-eu8rS9n93DcmIA9Ms0gfZEe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Electronic
              </a>
            ),
            trigger: "7",
          },
          {
            id: "12",
            component: (
              <a
                href="https://www.youtube.com/playlist?list=PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pop Music
              </a>
            ),
            trigger: "7",
          },
          {
            id: "13",
            component: (
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Search here for your own list
              </a>
            ),
            trigger: "7",
          },
          {
            id: "14",
            component: <Random />,
            trigger: "7",
          },
          {
            id: "15",
            message: "Stop nagging and go chat with your friends!",
            end: true,
          },
        ]}
      />
    </ThemeProvider>
  );
};

export default ChatBott;
