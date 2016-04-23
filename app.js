var express = require('express');
var path    = require('path');
// var routes = require('./routes/index');

var app = express();

app.set('port', (process.env.PORT || 5000));
app.set('views', path.join(__dirname, 'partials'));
app.set('view engine', 'jade');

// app.use('/', routes);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next) {
  res.send("We're sorry, the server you have reached has been disconnected or is no longer in service. Please check your URL and dial again.");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});