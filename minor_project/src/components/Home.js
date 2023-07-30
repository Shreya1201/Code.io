import React from "react";
import Homenav from "./homenav";
import "./Home.css";
import homepg from "../images/homepg.png";

import card1 from "../images/card1.jpeg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.png";
import Footer from "./Footer";
export default function Home() {
  return (
    <div className="mainpge">
      <Homenav />
      <br />
      <div className="intro">
        <div className="intro1">
          <p>
            The compiler is essential for the execution of the program. It
            transforms text-based source code into object code, an executable
            file type. Every sys would take up a lot of space if the compiler
            were forced to run manually. It would also need to be properly
            configured if it wasn't installed using the default parameters. The
            majority of apps and the interfaces that go along with them in
            today's env. operate online. Therefore, we developed an online test
            case compiler. The aim of this full-stack web application is to
            provide students with an instant online coding platform to practice
            problems for a competitive viewpoint. Its major goal is to make it
            easier for any user to build and run programs written in python
            language without having to download an IDE or compiler. On the
            client machine, no development kit is required.
          </p>
        </div>
        <div className="intro2">
          <img src={homepg} alt="" />
        </div>
      </div>
      <br />
      <br />
      <div className="intro">
        <br />
        <p>
          <h3>About CoDe.io</h3>
          Online compilers or code editors are tools which allows you to compile
          source code and execute it online in your desired programming
          language. They significantly reduce the hardware and software needed
          by programmers to work on any given project by storing and executing
          source code online. The compiler is essential for execution of the
          program. It transforms text-based source code into object code, an
          executable file type. Every system would take up a lot of space if the
          compiler were forced to run manually. It would also need to be
          properly configured if it wasn't installed using the default
          parameters. The majority of apps and the interfaces that go along with
          them in today's environment operate online. Therefore, these online
          tools are very helpful.
        </p>
      </div>
      <h1 className="feature">Features</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card">
              <img src={card1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Run Your Code</h5>
                <p className="card-text">
                  Our website allows the user to compile their own code.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={card2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Practice Questions</h5>
                <p className="card-text">
                  Write algorithm of questions and Run them on different test
                  cases
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <br />
              <img src={card3} className="card-img-top" alt="..." />
              <div className="card-body">
                <br />
                <br />

                <h5 className="card-title">Language</h5>
                <p className="card-text">
                  Write code in python language. More languages will be added
                  soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
