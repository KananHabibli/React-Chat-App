import React from "react";
import { ChatEngine } from "react-chat-engine";
import { constant } from "./assets";

//components
import ChatFeed from "./components/ChatFeed/ChatFeed";
import LoginForm from "./components/LoginForm";

//style
import "./App.css";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
      <ChatEngine
        height="100vh"
        projectID={constant.PROJECT_ID}
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(props) => <ChatFeed {...props} />}
      />
  );
};

export default App;
