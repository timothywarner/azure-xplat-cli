// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/test-ip6133?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-ip6133\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/test-ip6133\",\r\n  \"etag\": \"W/\\\"3f711bce-d05e-4d6c-956c-a214540fa919\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"b7bbadbf-5b49-4e6f-89c5-4f9a5aa241c3\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 15,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"bar-domain571\",\r\n      \"fqdn\": \"bar-domain571.westus.cloudapp.azure.com\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '728',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"3f711bce-d05e-4d6c-956c-a214540fa919"',
  'x-ms-request-id': 'cb7d2d9b-ff72-4a7c-9b80-7669eead3a4c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '2c17738c-20a8-4f4f-9750-2e4743385e0b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160205T120609Z:2c17738c-20a8-4f4f-9750-2e4743385e0b',
  date: 'Fri, 05 Feb 2016 12:06:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/test-ip6133?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"test-ip6133\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/test-ip6133\",\r\n  \"etag\": \"W/\\\"3f711bce-d05e-4d6c-956c-a214540fa919\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"b7bbadbf-5b49-4e6f-89c5-4f9a5aa241c3\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 15,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"bar-domain571\",\r\n      \"fqdn\": \"bar-domain571.westus.cloudapp.azure.com\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '728',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"3f711bce-d05e-4d6c-956c-a214540fa919"',
  'x-ms-request-id': 'cb7d2d9b-ff72-4a7c-9b80-7669eead3a4c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '2c17738c-20a8-4f4f-9750-2e4743385e0b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160205T120609Z:2c17738c-20a8-4f4f-9750-2e4743385e0b',
  date: 'Fri, 05 Feb 2016 12:06:08 GMT',
  connection: 'close' });
 return result; }]];