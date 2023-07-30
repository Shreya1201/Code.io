import React from "react";
import Regnav from "./regnav";
import "./Compiler.css";
import Footer from "./Footer";
function Compiler() {
  return (
    <div className="compiler">
      <Regnav />
      <h1 className="ide">Online IDE</h1>
      <form id="myform" name="myform" method="post" action="compilecode">
        <div className="cont">
          <div className="codesect">
            <h3>Code :</h3>
            <textarea rows="13" id="code" name="code"></textarea>
          </div>

          <div className="inputsect">
            <h3>Input : </h3>
            <textarea rows="13" id="input" name="input"></textarea>
          </div>
        </div>
        <div className="langu">
          <h2>Language :</h2>
          <select name="lang">
            <option id="a1" value="C">
              C
            </option>
            <option id="a1" value="Python">
              Python
            </option>
          </select>
          <fieldset>
            <h1>Compile With Input :</h1>
            <div>
              <input
                type="radio"
                name="inputRadio"
                id="inputRadio"
                value="true"
              />
              <label for="coding">Yes</label>
            </div>
            <div>
              <input
                type="radio"
                name="inputRadio"
                id="inputRadio"
                value="false"
              />
              <label for="music">No</label>
            </div>
          </fieldset>
          {/* <div className="opt">
            
            <input
              type="radio"
              name="inputRadio"
              id="inputRadio"
              value="true"
            />
            yes
            <input
              type="radio"
              name="inputRadio"
              id="inputRadio"
              value="false"
            />
            No
          </div> */}
          <input type="submit" value="SUBMIT" name="submit" />
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Compiler;
