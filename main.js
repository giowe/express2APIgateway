'use strict';

module.exports = (req) => {
  const { method, params: [path], query, body, headers } = req;

  return {
    resource: '/{proxy+}',
    path,
    httpMethod: method,
    headers,
    queryStringParameters: query,
    pathParameters: {
      proxy: path
    },
    stageVariables: process.env.NODE_ENV,
    requestContext: {
      'accountId': '666666666666',
      'resourceId': 'resId123',
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
      'httpMethod': method,
      'apiId': 'xxxxxxxxxx'
    },
    body,
    isBase64Encoded: false
  };
};
