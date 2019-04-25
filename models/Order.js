'use strict';

const { Model } = require('objection');

class Order extends Model {

  static get tableName() {
    return 'orders';
  }

  /*static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        order_id: { type: 'integer' },
        customer_id: { type: 'integer' }
      }
    };
  }*/

  static get relationMappings() {
    return {
      customers: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/Customer',
        join: {
            from: 'orders.customer_id',
            to: 'customers.customer_id'
        }
      }
    };
  }
}

module.exports = Order;
