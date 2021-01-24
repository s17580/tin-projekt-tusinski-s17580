var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const samochodRouter = require('./routes/samochodRoute');
const adresRouter = require('./routes/adresRoute');
const uzytkownikRouter = require('./routes/uzytkownikRoute');
const warsztatRouter = require('./routes/warsztatRoute');
const zlecenieNaprawyRouter = require('./routes/zlecenieNaprawyRoute');
const logowanieRouter = require('./routes/logowanieRoute');
const rejestracjaRouter = require('./routes/rejestracjaRoute');
// const samochodApiRouter = require('./routes/api/SamochodApiRoute');
const sequelizeInit = require('./config/sequelize/init');
sequelizeInit()
    .catch(err => {
        console.log(err);
    });






var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/samochod', samochodRouter);
app.use('/adres', adresRouter);
app.use('/uzytkownik', uzytkownikRouter);
app.use('/warsztat', warsztatRouter);
app.use('/zlecenie', zlecenieNaprawyRouter);
app.use('/logowanie', logowanieRouter);
app.use('/rejestracja', rejestracjaRouter);
// app.use('/api/samochody', samochodApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;