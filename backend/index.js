import express from "express";
import cors from "cors";
import Register from "./models/register.js";
import "./db/conn.js";
import exec from "child_process"
import fs from 'fs';
import path from 'path'
import {fileURLToPath} from 'url';
import bodyParser from "body-parser";
import Feedback from "./models/feedback.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 8000;
const CODE_FOLDER = "./code";
// Routing
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  Register.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already exists" });
    } else {
      const user = new Register({
        name: name,
        email: email,
        password: password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully registered!!! Please login now." });
        }
      });
    }
  });
});

app.post("/feedback", (req, res) => {
  const { feedback } = req.body;
  Feedback.findOne({ feedback:feedback }, (err, feed) => {
    if (feed) {
      // res.send({ message: "User already exists" });
    } else {
      const feed = new Feedback({
        feedback:feedback
      });
      feed.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Thanks for your feedback" });
        }
      });
    }
  });
});

app.post("/test", (req, res, next) => {
  console.log(req.body)
  let code = req.body["code"];
  // console.log("testt",code);
  // console.log("bodyyyyy: ",req.body["code"])
  let qno = code[code.length-1];
  code = code.slice(0,-1);
  // console.log("CODE: ", code);
  // console.log(qno);
  
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    fs.writeFileSync(path.join(__dirname, CODE_FOLDER, "input_code.py"), code);
    const proc = exec.execSync("python3 " + path.join(CODE_FOLDER, "tests.py ") + qno);
    const results = proc.toString().replace("\n", "<br>");
    return res.send(results);
  } catch (error) {
    console.log("An error occurred nisaff");
    console.log(error);

    return res.send("An error occurred.");
  }
});

// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   Register.findOne({ email: email }, (err, user) => {
//     if (user) {
//       if (password === user.password) {
//         res.send({ message: "Login Successful", user: user });
//       } else {
//         res.send({ message: "Password didn't match" });
//       }
//     } else {
//       res.send({ message: "User is not registered" });
//     }
//   });
// });

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  Register.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successful", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User is not registered" });
    }
  });
});

// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   if(!email || !password){
//     alert("Please enter email and password");
//   }
  
//   const user = Register.findOne({ email: email });
//   if (user) {
//     if (password === user.password) {
//       res.send({ message: "Login Successful", user: user });
//     } else {
//       res.send({ message: "Password didn't match" });
//     }
//   } else {
//     res.send({ message: "User is not registered" });
//   }
// });


app.post("/problem", async (req, res) => {
  console.log("Inside problem post function");
  const data = new Problem({
    sno: req.body.sno,
    brief: req.body.brief,
    question: req.body.question,
    solution: req.body.solution,
    difficulty: req.body.difficulty,
  });
  const val = data.save();
  res.save("posted");
});

app.get("/problem", (req, res) => {
  Problem.find((err, val) => {
    if (err) {
      console.log(err);
    } else {
      res.json(val);
    }
  });
});

app.get('/logout',(res,req) =>{
  console.log("Hello my logout page")
  res.clearCookie('jwtoken',{path:'/Homepage'});
  res.status(200).send("User logout");
})

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
