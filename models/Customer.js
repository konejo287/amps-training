'use strict';

const { Model } = require('objection');

class Customer extends Model {

  static get tableName() {
    return 'customers';
  }

  /*static get jsonSchema() {
    return {
      type: 'object',
      required: ['last_name'],

      properties: {
        customer_id: { type: 'integer' },
        firstName: { type: 'string', minLength: 1, maxLength: 255 },
        last_name: { type: 'string', minLength: 1, maxLength: 255 }
      }
    };
  }*/

  static get relationMappings() {
    return {
      orders: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/Order',
        join: {
          from: 'customers.customer_id',
          to: 'orders.customer_id'
        }
      }
    };
  }
}

module.exports = Customer;
