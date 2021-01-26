const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const sequelizeInit = require("./config/sequelize/init");

sequelizeInit().catch((err) => {
  console.log(err);
});

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "2fe1126e301fc80c00125391bfa0879342d2aac3fc4e8b03",
    resave: false,
  })
);

app.use((req, res, next) => {
  const loggedUser = req.session.loggedUser;
  res.locals.loggedUser = loggedUser;
  if (!res.locals.loginError) {
    res.locals.loginError = undefined;
  }
  next();
});

app.use("/", require("./routes/index"));
app.use("/samochod", require("./routes/carRoutes"));
app.use("/adres", require("./routes/addresRoutes"));
app.use("/uzytkownik", require("./routes/userRoutes"));
app.use("/warsztat", require("./routes/workshopRoutes"));
app.use("/zlecenie", require("./routes/zlecenieNaprawyRoute"));
app.use("/logowanie", require("./routes/authRoutes"));
app.use("/rejestracja", require("./routes/rejestracjaRoute"));

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
