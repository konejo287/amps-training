var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

const ordersRouter = require('./orders')();
const Customer = require('../models/Customer');

var routes = function() {
    
    router.get('/', async (req, res) => {
        const customers = await Customer.query()
        res.json(customers)
    });

    router.get('/:id', async (req, res) => {
        const customer = await Customer.query().findById(req.params.id);
        res.json(customer)
    });

    router.post('/', async (req, res) => {
        const customer = await Customer.insert({first_name: 'pigma', last_name: "dengar"});
        res.json(customer);
    });

    router.use('/:customer_id/orders', function(req, res, next) {
        req.customer_id = req.params.customer_id;
        next()
    }, ordersRouter);
    
    return router;
}

module.exports = routes;