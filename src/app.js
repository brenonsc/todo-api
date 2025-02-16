const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const cors = require('cors');
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/apidocs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;