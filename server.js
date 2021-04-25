import express from 'express'; // Express framework
import dotenv from 'dotenv'; // Dotenv library
import '@babel/polyfill'; // Regenator runtime
import routes from './routes'; // Routes file
// eslint-disable-next-line no-unused-vars
import log from './logger'; // Custom logger

import {
  ALLOW_ORIGIN,
  ALLOW,
  ALLOW_HEADERS,
  ALLOW_METHODS,
  ALLOW_WILDCARD,
  REST_HEADERS_OPTIONS,
  REST_METHODS,
} from './constants'; // Request headers

// Load env vars
dotenv.config();

// import Exprees
const app = express();
// import Body-parser
const bodyParser = require('body-parser');

// Define the elements that will use our middleware

// Define request headers, this will avoid CORS missconfiguration
app.use((req, res, next) => {
  res.header(ALLOW_ORIGIN, ALLOW_WILDCARD);
  res.header(ALLOW_HEADERS, REST_HEADERS_OPTIONS);
  res.header(ALLOW_METHODS, REST_METHODS);
  res.header(ALLOW, REST_METHODS);
  next();
});
// Avoid nested objects
// app.use(bodyParser.urlencoded({ extended: false }));
// Read only JSON requests
app.use(bodyParser.json());
// Our API routes
app.use(routes);

module.exports = app;
