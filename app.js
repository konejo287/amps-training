const express = require('express');
const bodyParser = require('body-parser');
const Knex = require('knex');
const connection = require('./knexfile');
const customersRouter = require('./routes/customers')();
const { Model } = require('objection');

const knexConnection = Knex(connection)
Model.knex(knexConnection)

const app = express()
  .use(bodyParser.json())
  .use('/customers', customersRouter);

const server = app.listen(8641, () => {
  console.log('Example app listening at port %s', server.address().port);
});
