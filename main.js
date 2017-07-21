/**
 * Created by zanni on 21/07/17.
 */
'use strict';
const testPayload = require('test.json');

modules.export = (req, options) => {
  const {method, params, query, body} = req;
  return Object.assign({testPayload},{httpMethod : method, path : params[0], queryStringParameters : query, body})
};
