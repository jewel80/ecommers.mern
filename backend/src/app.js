const express = require("express");
const dotenv = require("dotenv");
const { infoLogger } = require("./config/logger")
const configureRoutes = require("./routers/index");
const { handleRequest, handleError } = require("./middlewares");
const swaggerUI = require("swagger-ui-express");
const cors = require('cors')

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());
//success requrest handle uesd to app...
app.use(handleRequest);

//if, {"ENVIRONMENT = TEST"} igonre "infoLogger()" function called..
if (process.env.ENVIRONMENT != 'TEST')
    app.use(infoLogger());

//route function called and used app parameter(express)...
configureRoutes(app);

//error requrest handle uesd to app...
app.use(handleError);


module.exports = app;
