import React, { useState } from "react";
import axios from "axios";
import bgImg from "../images/register.png";
import "./Register.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Regnav from "./regnav";
import Footer from "./Footer";

export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, cpassword } = user;
    if (name && email && password && password === cpassword) {
      alert("Registered");
      axios.post("http://localhost:8000/register", user).then((res) => {
        alert(res.data.message);
        navigate("/Login");
      });
    } else {
      alert("Invalid input");
    }
  };

  return (
    <div>
      <Regnav />
      <section>
        <div className="register">
          <div className="col-1">
            <h2>Register</h2>
            {/* <span>register and enjoy the service</span> */}

            <div id="form" className="flex flex-col">
              <input
                type="text"
                name="name"
                value={user.name}
                placeholder="Enter your name"
                onChange={handleChange}
              />
              <input
                type="email"
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
              <input
                type="password"
                name="cpassword"
                value={user.cpassword}
                placeholder="Re-enter your password"
                onChange={handleChange}
              />
              <Link className="lgrg" onClick={register}>
                Register
              </Link>

              <div className="btn1">
                <p>Already a member?</p>

                <Link className="btn2" to="/Login">
                  Login
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
}
