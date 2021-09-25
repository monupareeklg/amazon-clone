import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as myConstList from "../common/baseUrl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseUrl = myConstList.baseUrl;

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let RegisterData = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    console.log("Password",password)
    console.log("Password",confirmPassword)
    axios.post(baseUrl + "/api/register", RegisterData).then((resp) => {
      var resp = resp.data;
      if (resp.status === true) {
        toast.success("User registerd sucessfuly");
        return true;
      }
    });
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
        <h1>Create Account</h1>
        <form>
          <h5>Your name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            placeholder="At least 6 characters"
          />
          <span>Passwords must be at least 6 characters.</span>
          <h5>Password again</h5>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="At least 6 characters"
          />
        </form>
        <p>
          By creating an account or logging in, you agree to Amazon’s{" "}
          <a href="google.com">Conditions of Use</a> and{" "}
          <a href="https://google.com">Privacy Policy</a>.
        </p>
        <button className="login__signInButton" onClick={handleSubmit}>
          Create your Amazone Account
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
