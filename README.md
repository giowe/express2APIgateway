# express2apigateway

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency Status][dependencies-image]][dependencies-url] [![Gandalf  Status][gandalf-image]][gandalf-url]

[npm-url]: https://www.npmjs.com/package/express2apigateway
[npm-image]: http://img.shields.io/npm/v/express2apigateway.svg?style=flat
[downloads-image]: https://img.shields.io/npm/dm/express2apigateway.svg?style=flat-square
[dependencies-image]: https://david-dm.org/giowe/express2apigateway.svg
[dependencies-url]: href="https://david-dm.org/giowe/express2apigateway
[gandalf-url]: https://www.youtube.com/watch?v=Sagg08DrO5U
[gandalf-image]: http://img.shields.io/badge/gandalf-approved-61C6FF.svg

## What is express2apigateway?

express2apigateway is a library that given a express `req` object returns an API Gateway like integration
as if API Gateway was setted in mode proxy+

## How to use it


You can install express2apigateway running:  
``$ npm install express2apigateway``

use it in your code:
```js
const express2apigateway = require('express2apigateway');
const request = express2apigateway(req,[integration]);
```
###Integrations

You can pass an object like this one as integration: 
```
{
  'resource': '/{proxy+}',
  'stageVariables': 'stageVariables',
  'requestContext': {
    'accountId': '666666666666',
    'resourceId': 'rrrrrr'        
    'stage': 'prod',
    'requestId': 'cead6d99-9560-11e6-9d3a-dbcbabbee3bb',
    'identity': {
      'cognitoIdentityPoolId': null,
      'accountId': null,
      'cognitoIdentityId': null,
      'caller': null,
      'apiKey': null,
      'sourceIp': '66.66.66.66',
      'cognitoAuthenticationType': null,
      'cognitoAuthenticationProvider': null,
      'userArn': null,
      'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36',
      'user': null
    },
    'resourcePath': '/{proxy+}',
    'httpMethod': 'GET',
    'apiId': 'xxxxxxxxxx'
  }
}
```
## License
MIT
