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
        console.log('creating customer: ' , req.body);
        const customer = await Customer.query()
            .insert({
                first_name: req.body.first_name, 
                last_name: req.body.last_name
            });
        res.json(customer);
    });

    router.delete('/:id', async (req, res) => {
        console.log("deleting customer");
        const customer = await Customer.query().deleteById(req.params.id);
        res.json(customer);
    });

    router.use('/:customer_id/orders', function(req, res, next) {
        req.customer_id = req.params.customer_id;
        next()
    }, ordersRouter);
    
    return router;
}

module.exports = routes;