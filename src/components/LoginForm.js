import React from "react";
import { useState } from "react";
import { Grid, Image } from "semantic-ui-react";
import FirebaseAuthService from "../FirebaseAuthService";

import "../css/loginform.css";
import chef3 from "../images/chef3.avif";
import { Link } from "react-router-dom";

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

  // const handleSendResetPasswordEmail = async () => {
  //   if (!username) {
  //     alert("Missing Username!");
  //     return;
  //   }

  //   try {
  //     await FirebaseAuthService.sendPasswordResetEmail(username);
  //     alert("Sent the password reset email!");
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  return (
    <div className="gridded">
      <Grid divided="vertically">
        <Grid.Row className="container" columns={2}>
          <Grid.Column>
            <Image fluid src={chef3} alt="chef3" />
          </Grid.Column>

          <Grid.Column>
            <div className="login-container">
              {existingUser ? (
                <form className="ui mini form">
                  <h1>Welcome, </h1>
                  <label>
                    You are now able to create, edit, and delete recipes
                  </label>
                  <br />
                  <Link to='/create'>
                    <button className="ui button create">
                      Create A New Recipe
                    </button>
                  </Link>
                  <button className="ui button logout" onClick={handleLogout}>
                    Logout
                  </button>
                </form>
              ) : (
                <form className="ui mini form" onSubmit={handleSubmit}>
                  <div className="eight wide field">
                    <label>Have the secret login?</label>
                    <br />
                    <label>Enter Email</label>
                    <input
                      placeholder="Enter username"
                      type="email"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="eight wide field">
                    <label>Enter Password</label>
                    <input
                      placeholder="Enter password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button className="ui button">Login</button>
                </form>
              )}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="z-index"> ABOUT</div>
    </div>
  );
};

export default LoginForm;
