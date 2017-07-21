/**
 * Created by zanni on 21/07/17.
 */
'use strict';

module.exports = (req, integrations) => {
  const {method, params, query, body, headers} = req;
  return {
    'resource': integrations.resource || '/{proxy+}',
    'path': params[0],
    'httpMethod': method,
    'headers': Object.assign({'X-Amz-Cf-Id': '66666666666666_666666666666666666_x_6666666666666666666',
    'X-Forwarded-For': '66.66.66.66, 205.251.208.12',
    'X-Forwarded-Port': '443',
    'X-Forwarded-Proto': 'https'}, headers),
    'queryStringParameters': query,
    'pathParameters': {
      'proxy': 'tests/xxxxx'
    },
    'stageVariables': integrations.stageVariables || process.env.NODE_ENV,
    'requestContext': Object.assign({
      'accountId': '666666666666',
      'resourceId': 'rrrrrr',
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
    }, integrations.requestContext),
    'body': body
  };
};
