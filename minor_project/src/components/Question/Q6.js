import React from "react";
import HomeNav from "../homenav";
import "./Q.css";
import Footer from "../Footer";
function Q6() {
  function runTests() {
    let btn = document.getElementById("runtestsbtn");
    btn.style.display = "none";
    document.getElementById("results").innerHTML = "Running...";

    const code = document.getElementById("code").value;
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("results").innerHTML = xhr.responseText;
        btn.style.display = "initial";
      }
    };

    xhr.open("POST", "http://localhost:8000/test/");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("code=" + code + "5");
  }
  return (
    <div>
      <HomeNav />
      <div class="containerQuestion">
        <div class="question">
          <h2>QUESTION :</h2>
          <div>
            Given a sorted array containing only 0s and 1s, find the transition
            point.{" "}
          </div>
        </div>
        <div class="code-area">
          <textarea class="input" id="code" autofocus>
            def solution(arr):
          </textarea>

          <button id="runtestsbtn" onClick={runTests}>
            RUN TESTS
          </button>

          <span id="results"></span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Q6;
