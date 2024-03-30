const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const passportStrategy = require("./config/passport");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDatabase = require("./config/connectDatabase");


// import database connection
connectDatabase();
// Use cors to allow cross origin resource sharing
const cors = require("cors");

// Use session to store the cookie
app.use(
  cookieSession({
    name: "session",
    keys: ["firasYassine"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

// Use cookie-session to store the cookie
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
// Use express.json to parse json data
app.use(express.json());

// Use routes
app.use("/api/users", require("./routes/UserRoutes"));
app.use("/api/auth", require("./routes/AuthRoutes"));
app.use("/api/password-reset", require("./routes/PasswordRoutes"));
app.use("/api/categories", require("./routes/CategoryRoutes"));
app.use("/api/campaigns", require("./routes/CampaignRoutes"));
app.use("/api/rewards", require("./routes/RewardRoutes"));

app.get("/hello",  async (req, res) => {
  await res.send("hello from simple server :)");
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
