// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'centralus';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate9637/providers/Microsoft.Compute/virtualMachines/xplatvm?$expand=instanceView&api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"a5dc7f37-5b40-44b7-a041-6986da0a7c6f\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate9637/providers/Microsoft.Compute/availabilitySets/XPLATTESTAAVAIL432\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.10\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli3f3826d5717e8c44-os-1455086774347\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage16190.blob.core.windows.net/xplatteststoragecnt18957/cli3f3826d5717e8c44-os-1455086774347.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate9637/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatteststorage16190.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"platformUpdateDomain\": 0,\r\n      \"platformFaultDomain\": 0,\r\n      \"vmAgent\": {\r\n        \"vmAgentVersion\": \"2.1.2\",\r\n        \"statuses\": [\r\n          {\r\n            \"code\": \"ProvisioningState/succeeded\",\r\n            \"level\": \"Info\",\r\n            \"displayStatus\": \"Ready\",\r\n            \"message\": \"Guest Agent is running\",\r\n            \"time\": \"2016-02-10T07:02:20+00:00\"\r\n          }\r\n        ],\r\n        \"extensionHandlers\": []\r\n      },\r\n      \"disks\": [\r\n        {\r\n          \"name\": \"cli3f3826d5717e8c44-os-1455086774347\",\r\n          \"statuses\": [\r\n            {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Provisioning succeeded\",\r\n              \"time\": \"2016-02-10T07:01:12.5499959+00:00\"\r\n            }\r\n          ]\r\n        }\r\n      ],\r\n      \"bootDiagnostics\": {\r\n        \"consoleScreenshotBlobUri\": \"https://xplatteststorage16190.blob.core.windows.net/bootdiagnostics-xplatvm-a5dc7f37-5b40-44b7-a041-6986da0a7c6f/xplatvm.a5dc7f37-5b40-44b7-a041-6986da0a7c6f.screenshot.bmp\",\r\n        \"serialConsoleLogBlobUri\": \"https://xplatteststorage16190.blob.core.windows.net/bootdiagnostics-xplatvm-a5dc7f37-5b40-44b7-a041-6986da0a7c6f/xplatvm.a5dc7f37-5b40-44b7-a041-6986da0a7c6f.serialconsole.log\"\r\n      },\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"time\": \"2016-02-10T07:02:14.7234486+00:00\"\r\n        },\r\n        {\r\n          \"code\": \"PowerState/running\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"VM running\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate9637/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"centralus\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5209',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '8b389b8b-027e-46fa-beac-7bb15adb1e3b_130995610563557714',
  'x-ms-request-id': '45afb98f-3914-4b4c-a125-10de7f12c2e1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'bd96cff2-fefb-4600-9586-ef15271fcb7a',
  'x-ms-routing-request-id': 'CENTRALUS:20160210T070245Z:bd96cff2-fefb-4600-9586-ef15271fcb7a',
  date: 'Wed, 10 Feb 2016 07:02:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate9637/providers/Microsoft.Compute/virtualMachines/xplatvm?$expand=instanceView&api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"a5dc7f37-5b40-44b7-a041-6986da0a7c6f\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate9637/providers/Microsoft.Compute/availabilitySets/XPLATTESTAAVAIL432\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.10\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli3f3826d5717e8c44-os-1455086774347\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage16190.blob.core.windows.net/xplatteststoragecnt18957/cli3f3826d5717e8c44-os-1455086774347.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate9637/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatteststorage16190.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"platformUpdateDomain\": 0,\r\n      \"platformFaultDomain\": 0,\r\n      \"vmAgent\": {\r\n        \"vmAgentVersion\": \"2.1.2\",\r\n        \"statuses\": [\r\n          {\r\n            \"code\": \"ProvisioningState/succeeded\",\r\n            \"level\": \"Info\",\r\n            \"displayStatus\": \"Ready\",\r\n            \"message\": \"Guest Agent is running\",\r\n            \"time\": \"2016-02-10T07:02:20+00:00\"\r\n          }\r\n        ],\r\n        \"extensionHandlers\": []\r\n      },\r\n      \"disks\": [\r\n        {\r\n          \"name\": \"cli3f3826d5717e8c44-os-1455086774347\",\r\n          \"statuses\": [\r\n            {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Provisioning succeeded\",\r\n              \"time\": \"2016-02-10T07:01:12.5499959+00:00\"\r\n            }\r\n          ]\r\n        }\r\n      ],\r\n      \"bootDiagnostics\": {\r\n        \"consoleScreenshotBlobUri\": \"https://xplatteststorage16190.blob.core.windows.net/bootdiagnostics-xplatvm-a5dc7f37-5b40-44b7-a041-6986da0a7c6f/xplatvm.a5dc7f37-5b40-44b7-a041-6986da0a7c6f.screenshot.bmp\",\r\n        \"serialConsoleLogBlobUri\": \"https://xplatteststorage16190.blob.core.windows.net/bootdiagnostics-xplatvm-a5dc7f37-5b40-44b7-a041-6986da0a7c6f/xplatvm.a5dc7f37-5b40-44b7-a041-6986da0a7c6f.serialconsole.log\"\r\n      },\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"time\": \"2016-02-10T07:02:14.7234486+00:00\"\r\n        },\r\n        {\r\n          \"code\": \"PowerState/running\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"VM running\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate9637/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"centralus\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5209',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '8b389b8b-027e-46fa-beac-7bb15adb1e3b_130995610563557714',
  'x-ms-request-id': '45afb98f-3914-4b4c-a125-10de7f12c2e1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'bd96cff2-fefb-4600-9586-ef15271fcb7a',
  'x-ms-routing-request-id': 'CENTRALUS:20160210T070245Z:bd96cff2-fefb-4600-9586-ef15271fcb7a',
  date: 'Wed, 10 Feb 2016 07:02:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate9637/providers/Microsoft.Storage/storageAccounts/xplatteststorage16190/listKeys?api-version=2015-06-15')
  .reply(200, "{\"key1\":\"kM17SKtYr4eoo0/epxfLy/PuARI4ZNXeenGQqFQ8965n0IAeRZi0s4kFAkPr0Mpl7V7/w+LoYko43zpYGTB5KQ==\",\"key2\":\"EXu3MuX/jy1w3hAnQn3+8z6z1PQWrEpEidgXIqi6MZoiCEyFHF5Ah/KqZqez7dJ7Lf5i7Z1mZsneuj+jlqeFUA==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'b4a9cb47-17aa-400b-9c4d-0eff9fc26c54',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'b4a9cb47-17aa-400b-9c4d-0eff9fc26c54',
  'x-ms-routing-request-id': 'CENTRALUS:20160210T070246Z:b4a9cb47-17aa-400b-9c4d-0eff9fc26c54',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 10 Feb 2016 07:02:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreate9637/providers/Microsoft.Storage/storageAccounts/xplatteststorage16190/listKeys?api-version=2015-06-15')
  .reply(200, "{\"key1\":\"kM17SKtYr4eoo0/epxfLy/PuARI4ZNXeenGQqFQ8965n0IAeRZi0s4kFAkPr0Mpl7V7/w+LoYko43zpYGTB5KQ==\",\"key2\":\"EXu3MuX/jy1w3hAnQn3+8z6z1PQWrEpEidgXIqi6MZoiCEyFHF5Ah/KqZqez7dJ7Lf5i7Z1mZsneuj+jlqeFUA==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'b4a9cb47-17aa-400b-9c4d-0eff9fc26c54',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'b4a9cb47-17aa-400b-9c4d-0eff9fc26c54',
  'x-ms-routing-request-id': 'CENTRALUS:20160210T070246Z:b4a9cb47-17aa-400b-9c4d-0eff9fc26c54',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 10 Feb 2016 07:02:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplatteststorage16190.blob.core.windows.net:443')
  .head('/bootdiagnostics-xplatvm-a5dc7f37-5b40-44b7-a041-6986da0a7c6f/xplatvm.a5dc7f37-5b40-44b7-a041-6986da0a7c6f.serialconsole.log')
  .reply(200, "", { 'content-length': '512',
  'last-modified': 'Wed, 10 Feb 2016 07:02:31 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D331E8250E031C"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '148a113e-0001-007b-4ed1-63f086000000',
  'x-ms-version': '2015-02-21',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'PageBlob',
  'x-ms-blob-sequence-number': '0',
  date: 'Wed, 10 Feb 2016 07:02:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplatteststorage16190.blob.core.windows.net:443')
  .head('/bootdiagnostics-xplatvm-a5dc7f37-5b40-44b7-a041-6986da0a7c6f/xplatvm.a5dc7f37-5b40-44b7-a041-6986da0a7c6f.serialconsole.log')
  .reply(200, "", { 'content-length': '512',
  'last-modified': 'Wed, 10 Feb 2016 07:02:31 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D331E8250E031C"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '148a113e-0001-007b-4ed1-63f086000000',
  'x-ms-version': '2015-02-21',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'PageBlob',
  'x-ms-blob-sequence-number': '0',
  date: 'Wed, 10 Feb 2016 07:02:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplatteststorage16190.blob.core.windows.net:443')
  .get('/bootdiagnostics-xplatvm-a5dc7f37-5b40-44b7-a041-6986da0a7c6f/xplatvm.a5dc7f37-5b40-44b7-a041-6986da0a7c6f.serialconsole.log')
  .reply(200, "2016/02/10 07:00:31.168425 INFO Sleep 1 second to avoid throttligg.\r\n2016/02/10 07:01111.563210 INFO Last request issued less than 1 second ago\r\n2016/02/10 07:01:51.575083 INFO Sleep 1 second to avoid throttling.\r\n2016/02/10 07:01:52.587396 INFO Sleep 1 second to avoid throttling.\r\n2016/02/10 07:01:53.653446 INFO Last request issued less than 1 second ago\r\n2016/02/10 07:01:53.664481 INFO Sleep 1 second to avoid throttling.\r\n2016/02/10 07:02:19.783398 INFO Sleep 1 second to avoid throttling.\r\n\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000", { 'content-length': '512',
  'last-modified': 'Wed, 10 Feb 2016 07:02:31 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D331E8250E031C"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '52b8f664-0001-0053-59d1-638739000000',
  'x-ms-version': '2015-02-21',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'PageBlob',
  'x-ms-blob-sequence-number': '0',
  date: 'Wed, 10 Feb 2016 07:02:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplatteststorage16190.blob.core.windows.net:443')
  .get('/bootdiagnostics-xplatvm-a5dc7f37-5b40-44b7-a041-6986da0a7c6f/xplatvm.a5dc7f37-5b40-44b7-a041-6986da0a7c6f.serialconsole.log')
  .reply(200, "2016/02/10 07:00:31.168425 INFO Sleep 1 second to avoid throttligg.\r\n2016/02/10 07:01111.563210 INFO Last request issued less than 1 second ago\r\n2016/02/10 07:01:51.575083 INFO Sleep 1 second to avoid throttling.\r\n2016/02/10 07:01:52.587396 INFO Sleep 1 second to avoid throttling.\r\n2016/02/10 07:01:53.653446 INFO Last request issued less than 1 second ago\r\n2016/02/10 07:01:53.664481 INFO Sleep 1 second to avoid throttling.\r\n2016/02/10 07:02:19.783398 INFO Sleep 1 second to avoid throttling.\r\n\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000", { 'content-length': '512',
  'last-modified': 'Wed, 10 Feb 2016 07:02:31 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D331E8250E031C"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '52b8f664-0001-0053-59d1-638739000000',
  'x-ms-version': '2015-02-21',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'PageBlob',
  'x-ms-blob-sequence-number': '0',
  date: 'Wed, 10 Feb 2016 07:02:46 GMT',
  connection: 'close' });
 return result; }]];