var express = require('express');
var router = express.Router();

const ordersRouter = require('./orders')();
const Customer = require('../models/Customer');

var routes = function() {
    
    router.get('/', async (req, res) => {
        const customers = await Customer.query()
        res.json(customers)
    })

    router.use('/:customer_id/order', function(req, res, next) {
        console.log('nesting params: ' , req.params);
        req.customer_id = req.params.customer_id;
        next()
    }, ordersRouter);
    
    return router;
}

module.exports = routes;