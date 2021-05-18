const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParse = require("cookie-parser");
const { User } = require("./modules/User");
const { mongoURI } = require("./config/Dev");
const { auth } = require("./config/auth");
const cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cookieParser());

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`Connectd....`))
  .catch((err) => console.log(`Err..${err}`));

app.get("/", (req, res) => {
  res.send("Hello World!!!!!");
});

app.post("/api/users/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.post("/api/users/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginRes: false,
        message: "No Email",
      });
    }
    user.comparePw(req.body.pw, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginRes: false, message: "No Correct Pw" });
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("x_auth", user.token).status(200).json({
          loginRes: true,
          message: "Success",
          token: user.token,
          cookie: req.cookies.x_auth,
        });
      });
    });
  });
});

app.post("/api/users/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req.user_id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user_name,
    role: req.user.role,
  });
});

app.get("/api/users/logout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
