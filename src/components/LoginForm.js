import React from "react";
import { useState } from "react";
import FirebaseAuthService from "../FirebaseAuthService";

const LoginForm = ({ existingUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await FirebaseAuthService.loginUser(username, password);
      setUsername("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = () => {
    FirebaseAuthService.logoutUser();
  };

  const handleSendResetPasswordEmail = async () => {
    if (!username) {
      alert("Missing Username!");
      return;
    }

    try {
      await FirebaseAuthService.sendPasswordResetEmail(username);
      alert("Sent the password reset email!");
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <div className="ui container">
      {existingUser ? (
        <div>
          <h3>Welcome, {existingUser.email}</h3>
          <button className="ui button primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <form className="ui mini form" onSubmit={handleSubmit}>
          <div className="inline field">
            <label>Username</label>
            <input
              placeholder="Enter username"
              type="email"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="inline field">
            <label>Password</label>
            <input
              placeholder="Enter password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="ui button primary">Login</button>
          <button
            className="ui button primary"
            onClick={handleSendResetPasswordEmail}
          >
            Reset Password
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
