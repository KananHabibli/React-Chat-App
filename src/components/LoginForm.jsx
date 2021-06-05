import React, { useState } from "react";
import { Card, Button, Input } from "@material-ui/core";
import { actions, constant } from "../assets";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": constant.PROJECT_ID,
      "User-Name": username,
      "User-Secret": password,
    };

    return actions
      .login(authObject)
      .then(() => {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        window.location.reload();
        setError("");
      })
      .catch((e) => setError("Oops, incorrect credentials."));
  };

  return (
    <div className="wrapper">
      <Card className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="******"
            required
          />
          <div align="center">
            <Button
              size="large"
              type="submit"
              variant="contained"
              disableElevation
            >
              Start Chatting
            </Button>
          </div>
          <span>{error}</span>
        </form>
      </Card>
    </div>
  );
};

export default LoginForm;
