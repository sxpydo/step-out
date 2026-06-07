import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "../navs/Nav";
import InputField from "./InputField";
import TextLink from "../buttons/TextLink";
import DefaultButton from "../buttons/DefaultButton";
import loginImg from "../../images/login-image.png";

const LogIn = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email: email, password: password };

    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/login`,
      user,
    );
    if (response.status === 200) {
      props.setUser(response.data.user);
      localStorage.setItem("user", response.data.user);
      navigate(`/dashboard`);
    } else {
      console.log("User not found");
    }
  };

  return (
    <>
      <Nav />
      <div className="flexible-layout">
        <div className="image-layout">
          <img
            src={loginImg}
            alt=" Illustration by Blush"
            className="log-img"
          />
        </div>
        <div id="sign-form">
          <h1>Log In</h1>
          <p>Hello again!</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <InputField
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required="required"
              />
            </div>
            <div className="form-group">
              <InputField
                placeholder="Password*"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required="required"
              />
            </div>
            <div className="form-group">
              <DefaultButton
                type="submit"
                id="submit"
                className="submit-button"
                label="Log in"
              >
                <Link to="/dashboard" />
              </DefaultButton>
            </div>
          </form>
          <div className="already">
            <a href="/">Forgotten password</a>
            <p>Don't have an account?</p>{" "}
            <TextLink text="Sign up" href="/signup" target="_self" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
