import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./homenav";
import bgImg from "../images/Feedback.png";
import Footer from "./Footer";

function Feedback() {
  const navigate = useNavigate();

  const [feed, setfeedback] = useState({
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setfeedback({
      ...feed,
      [name]: value,
    });
  };

  const feedback = () => {
    const { feedback } = feed;
    // alert("Thanks for your feedback")
    axios.post("http://localhost:8000/feedback", feed).then((res) => {
      alert(res.data.message);
      navigate("/Feedback");
    });
  };
  return (
    <div>
      <Navbar />
      <section>
        <div className="register">
          <div className="col-1">
            <h2>Feedback</h2>
            {/* <span>register and enjoy the service</span> */}

            <div id="form" className="flex flex-col">
              <input
                type="text"
                name="feedback"
                value={feed.feedback}
                placeholder="Enter your feedback"
                onChange={handleChange}
              />
              <Link className="lgrg" onClick={feedback}>
                Submit
              </Link>
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

export default Feedback;
