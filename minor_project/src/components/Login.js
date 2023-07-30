import React, { useState } from "react";
import bgImg from "../images/login.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import Regnav from "./regnav";
import axios from "axios";
import Footer from "./Footer";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/login", user)
      .then((res) => {
        if (res.data.message == "Login Successful") {
          navigate("/Home");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Regnav />
      <section className="page">
        <div className="register">
          <div className="col-1">
            <h2>LOGIN</h2>

            <div id="form" className="flex flex-col">
              <input
                type="text"
                name="email"
                value={user.email}
                placeholder="Enter your email address"
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                value={user.password}
                placeholder="Enter your password"
                onChange={handleChange}
              />
              <Link className="lgrg" onClick={login}>
                Login
              </Link>

              <div className="btn1">
                <p>New Member?</p>
                <Link className="btn2" to="/Register">
                  Register
                </Link>
              </div>
            </div>
          </div>
          <div className="col-2">
            <img src={bgImg} alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
