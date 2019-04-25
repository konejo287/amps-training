var express = require('express');
var router = express.Router();

const Order = require('../models/Order');
const Customer = require('../models/Customer');

var routes = function() {
    
    router.get('/', async (req, res) => {
        const customer = await Customer.query().findOne({
            customer_id: req.customer_id
        }).eager('orders');

        res.json(customer)
    })

    router.get('/:order_id', async (req, res) => {
        const order = await Order.query().findOne({
            order_id: req.params.order_id
        });
        res.json(order)
    })
    return router;
}

module.exports = routes;