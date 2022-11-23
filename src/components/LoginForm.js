import React from "react";
import { useState } from "react";
import FirebaseAuthService from "../FirebaseAuthService";

const LoginForm = ({ existingUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await FirebaseAuthService.registerUser(username, password);
      setUsername("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = () => {
    FirebaseAuthService.logoutUser();
  };

  return (
    <div>
      {existingUser ? (
        <div>
          <h3>Welcome, {existingUser.email}</h3>
          <button className="ui button primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <form class="ui mini form" onSubmit={handleSubmit}>

          <div class="inline field">
            <label>Username</label>
            <input 
            placeholder="Enter username"
            type="email"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div class="inline field">
            <label>Password</label>
            <input
            placeholder="Enter password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button className="ui button primary">Submit</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
