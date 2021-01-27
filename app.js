const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const flash = require("connect-flash");
const sequelizeInit = require("./config/sequelize/init");
const authUtils = require("./utils/authUtils");

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
app.use(flash());

app.use(
  session({
    secret: "2fe1126e301fc80c00125391bfa0879342d2aac3fc4e8b03",
    resave: false,
  })
);

app.use((req, res, next) => {
  const loggedUser = req.session.loggedUser;
  res.locals.loggedUser = loggedUser;
  res.locals.successMessage = req.flash("success")[0];
  res.locals.errorMessage = req.flash("error")[0];
  next();
});

app.use("/", require("./routes/index"));
app.use("/samochod", authUtils.permitAuthenticatedUser, require("./routes/carRoutes"));
app.use("/adres", authUtils.permitAuthenticatedUser, require("./routes/addresRoutes"));
app.use("/uzytkownik", authUtils.permitAuthenticatedUser, require("./routes/userRoutes"));
app.use("/warsztat", authUtils.permitAuthenticatedUser, require("./routes/workshopRoutes"));
app.use("/zlecenie", authUtils.permitAuthenticatedUser, require("./routes/repairOrderRoutes"));

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
