const express = require('express');
const bodyParser = require('body-parser');
const Knex = require('knex');
const connection = require('./knexfile');
const customersRouter = require('./routes/customers')();
const { Model } = require('objection');
const cors = require('cors');

const knexConnection = Knex(connection)
Model.knex(knexConnection)

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use('/customers', customersRouter);

const server = app.listen(8000, () => {
  console.log('Example app listening at port %s', server.address().port);
});
