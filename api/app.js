var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var app = express();
const mongodbUri = `mongodb+srv://pawan:a4XypE3rFfKc2X3N@collegium.de3be.mongodb.net/collegiumDB?retryWrites=true&w=majority`;

try {
  const mongoose = require("mongoose");
  mongoose.connect(
    mongodbUri,
    {
      useNewUrlParser: true,
      useUnifiedToplogy: true,
    },
    () => console.log("Connected to Mongo")
  );
} catch (err) {
  console.log("Error connecting to Mongo: " + err);
}

//import routes

var metricsRouter = require("./routes/metrics");
var healthRouter = require("./routes/health");
var userRouter = require("./routes/user");
var eventRouter = require("./routes/event");
// view engine setup
app.set("view engine", "json");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());

// routes

app.use("/metrics", metricsRouter);
app.use("/health", healthRouter);
app.use("/User", userRouter);
app.use("/Event", eventRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
