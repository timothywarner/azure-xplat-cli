// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'c9cbd920-c00c-427c-852b-8aaf38badaeb',
    name: 'Azure SDK Powershell Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'South Central US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/resourcegroups/xDeploymentTestGroup395?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xDeploymentTestGroup395' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-request-id': 'd3f08439-53d4-4bff-839a-a2e087e3a6a1',
  'x-ms-correlation-request-id': 'd3f08439-53d4-4bff-839a-a2e087e3a6a1',
  'x-ms-routing-request-id': 'WESTUS:20151007T172527Z:d3f08439-53d4-4bff-839a-a2e087e3a6a1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Oct 2015 17:25:26 GMT',
  connection: 'close',
  'content-length': '115' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/resourcegroups/xDeploymentTestGroup395?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xDeploymentTestGroup395' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-request-id': 'd3f08439-53d4-4bff-839a-a2e087e3a6a1',
  'x-ms-correlation-request-id': 'd3f08439-53d4-4bff-839a-a2e087e3a6a1',
  'x-ms-routing-request-id': 'WESTUS:20151007T172527Z:d3f08439-53d4-4bff-839a-a2e087e3a6a1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Oct 2015 17:25:26 GMT',
  connection: 'close',
  'content-length': '115' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/resourcegroups/xDeploymentTestGroup395?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/resourceGroups/xDeploymentTestGroup395\",\"name\":\"xDeploymentTestGroup395\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '217',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-request-id': 'ae19ac12-7dec-43f1-adff-4c9fa929e972',
  'x-ms-correlation-request-id': 'ae19ac12-7dec-43f1-adff-4c9fa929e972',
  'x-ms-routing-request-id': 'WESTUS:20151007T172529Z:ae19ac12-7dec-43f1-adff-4c9fa929e972',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Oct 2015 17:25:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/resourcegroups/xDeploymentTestGroup395?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/resourceGroups/xDeploymentTestGroup395\",\"name\":\"xDeploymentTestGroup395\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '217',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-request-id': 'ae19ac12-7dec-43f1-adff-4c9fa929e972',
  'x-ms-correlation-request-id': 'ae19ac12-7dec-43f1-adff-4c9fa929e972',
  'x-ms-routing-request-id': 'WESTUS:20151007T172529Z:ae19ac12-7dec-43f1-adff-4c9fa929e972',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Oct 2015 17:25:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/resourcegroups/xDeploymentTestGroup395/providers/microsoft.resources/deployments/Deploy13785/validate?api-version=2014-04-01-preview', '*')
  .reply(400, "{\"error\":{\"code\":\"InvalidTemplate\",\"message\":\"Deployment template validation failed: 'The value for the template parameter 'siteLocation' at line '1' and column '248' is not provided.'.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-writes': '1187',
  'x-ms-request-id': '6383352d-8f24-459c-bf37-2ae474222c60',
  'x-ms-correlation-request-id': '6383352d-8f24-459c-bf37-2ae474222c60',
  'x-ms-routing-request-id': 'WESTUS:20151007T172529Z:6383352d-8f24-459c-bf37-2ae474222c60',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Oct 2015 17:25:29 GMT',
  connection: 'close',
  'content-length': '188' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/resourcegroups/xDeploymentTestGroup395/providers/microsoft.resources/deployments/Deploy13785/validate?api-version=2014-04-01-preview', '*')
  .reply(400, "{\"error\":{\"code\":\"InvalidTemplate\",\"message\":\"Deployment template validation failed: 'The value for the template parameter 'siteLocation' at line '1' and column '248' is not provided.'.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-writes': '1187',
  'x-ms-request-id': '6383352d-8f24-459c-bf37-2ae474222c60',
  'x-ms-correlation-request-id': '6383352d-8f24-459c-bf37-2ae474222c60',
  'x-ms-routing-request-id': 'WESTUS:20151007T172529Z:6383352d-8f24-459c-bf37-2ae474222c60',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Oct 2015 17:25:29 GMT',
  connection: 'close',
  'content-length': '188' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/resourcegroups/xDeploymentTestGroup395?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDM5NS1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-request-id': '23814404-f652-40e3-98b9-f0d2dc47efdd',
  'x-ms-correlation-request-id': '23814404-f652-40e3-98b9-f0d2dc47efdd',
  'x-ms-routing-request-id': 'WESTUS:20151007T172530Z:23814404-f652-40e3-98b9-f0d2dc47efdd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Oct 2015 17:25:29 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/resourcegroups/xDeploymentTestGroup395?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDM5NS1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-request-id': '23814404-f652-40e3-98b9-f0d2dc47efdd',
  'x-ms-correlation-request-id': '23814404-f652-40e3-98b9-f0d2dc47efdd',
  'x-ms-routing-request-id': 'WESTUS:20151007T172530Z:23814404-f652-40e3-98b9-f0d2dc47efdd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Oct 2015 17:25:29 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDM5NS1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDM5NS1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-request-id': '673136a5-f4a8-49ab-85dc-8739c3c7ca63',
  'x-ms-correlation-request-id': '673136a5-f4a8-49ab-85dc-8739c3c7ca63',
  'x-ms-routing-request-id': 'WESTUS:20151007T172545Z:673136a5-f4a8-49ab-85dc-8739c3c7ca63',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Oct 2015 17:25:44 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDM5NS1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDM5NS1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-request-id': '673136a5-f4a8-49ab-85dc-8739c3c7ca63',
  'x-ms-correlation-request-id': '673136a5-f4a8-49ab-85dc-8739c3c7ca63',
  'x-ms-routing-request-id': 'WESTUS:20151007T172545Z:673136a5-f4a8-49ab-85dc-8739c3c7ca63',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Oct 2015 17:25:44 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDM5NS1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDM5NS1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-request-id': 'eb680558-1e01-42d9-96a7-78dd8a7b65a9',
  'x-ms-correlation-request-id': 'eb680558-1e01-42d9-96a7-78dd8a7b65a9',
  'x-ms-routing-request-id': 'WESTUS:20151007T172601Z:eb680558-1e01-42d9-96a7-78dd8a7b65a9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Oct 2015 17:26:01 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDM5NS1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDM5NS1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-request-id': 'eb680558-1e01-42d9-96a7-78dd8a7b65a9',
  'x-ms-correlation-request-id': 'eb680558-1e01-42d9-96a7-78dd8a7b65a9',
  'x-ms-routing-request-id': 'WESTUS:20151007T172601Z:eb680558-1e01-42d9-96a7-78dd8a7b65a9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Oct 2015 17:26:01 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDM5NS1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-request-id': 'e55d61f6-6636-471b-9a76-c5ad492ddc42',
  'x-ms-correlation-request-id': 'e55d61f6-6636-471b-9a76-c5ad492ddc42',
  'x-ms-routing-request-id': 'WESTUS:20151007T172617Z:e55d61f6-6636-471b-9a76-c5ad492ddc42',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Oct 2015 17:26:16 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDM5NS1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-request-id': 'e55d61f6-6636-471b-9a76-c5ad492ddc42',
  'x-ms-correlation-request-id': 'e55d61f6-6636-471b-9a76-c5ad492ddc42',
  'x-ms-routing-request-id': 'WESTUS:20151007T172617Z:e55d61f6-6636-471b-9a76-c5ad492ddc42',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Oct 2015 17:26:16 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xDeploymentTestGroup395','Deploy13785'];};