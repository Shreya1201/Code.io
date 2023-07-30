import React from "react";
import HomeNav from "../homenav";
import "./Q.css";
import Footer from "../Footer";
function Q8() {
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
    xhr.send("code=" + code + "7");
  }
  return (
    <div>
      <HomeNav />
      <div class="containerQuestion">
        <div class="question">
          <h2>QUESTION :</h2>
          <div>
            Given a Integer array A[] of n elements. Your task is to complete
            the function PalinArray. Which will return 1 if all the elements of
            the Array are palindrome otherwise it will return 0.
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

export default Q8;
