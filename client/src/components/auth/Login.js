import React, { useState, useHistory } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  // const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={signIn}
            className="login__signInButton"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions if Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Intrest-Based Ads
          Notice.
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your Amazone Account
        </button>
      </div>
    </div>
  );
}

export default Login;
