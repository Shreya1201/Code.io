import React from "react";
import HomeNav from "../homenav";
import "./Q.css";
import Footer from "../Footer";
function Q7() {
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
    xhr.send("code=" + code + "6");
  }
  return (
    <div>
      <HomeNav />
      <div class="containerQuestion">
        <div class="question">
          <h2>QUESTION :</h2>
          <div>
            Given an array arr[] of size N-1 with integers in the range of [1,
            N], the task is to find the missing number from the first N
            integers. [1, 2, 4, 6, 3, 7, 8] output:5
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

export default Q7;
