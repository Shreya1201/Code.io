import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Problem from "./components/Problem";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Q1 from "./components/Question/Q1";
import Q2 from "./components/Question/Q2";
import Q3 from "./components/Question/Q3";
import Q4 from "./components/Question/Q4";
import Q5 from "./components/Question/Q5";
import Q6 from "./components/Question/Q6";
import Q7 from "./components/Question/Q7";
import Q8 from "./components/Question/Q8";
import Q9 from "./components/Question/Q9";
import Register from "./components/Register";
import Compiler from "./components/Compiler";
import Feedback from "./components/Feedback";

function Main() {
  const [user, setLoginUser] = useState({})
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Login" element={<Login setLoginUser={setLoginUser} />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Home" element={<Home setLoginUser={setLoginUser} />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Compiler" element={<Compiler />} />
      <Route path="/Feedback" element={<Feedback />} />
      <Route path="/Problem" element={<Problem />} />
      <Route path="/" element={<Logout />} />
      <Route path="/Q1" element={<Q1 />} />
      <Route path="/Q2" element={<Q2 />} />
      <Route path="/Q3" element={<Q3 />} />
      <Route path="/Q4" element={<Q4 />} />
      <Route path="/Q5" element={<Q5 />} />
      <Route path="/Q6" element={<Q6 />} />
      <Route path="/Q7" element={<Q7 />} />
      <Route path="/Q8" element={<Q8 />} />
      <Route path="/Q9" element={<Q9 />} />
    </Routes>
  );
}
export default Main;