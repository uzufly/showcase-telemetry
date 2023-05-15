// see: https://parceljs.org/features/development/#.proxyrc.js

const morgan = require('morgan'); // see: https://github.com/expressjs/morgan

module.exports = function (app) {
  app.use(morgan('dev'));
  app.use(function (req, res, next) {
    console.log('Request Headers:', req.headers);
    next();
  });
};
