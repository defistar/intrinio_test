var intrinioSDK = require('intrinio-sdk');
const util = require('util')
 
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "OjM4MjE0ODZhMjY1OTE3ZWRmNDllMWJmNGE3OTQzNzlh";
intrinioSDK.ApiClient.instance.enableRetries = true;
 
var companyAPI = new intrinioSDK.CompanyApi()
 
companyAPI.getAllCompanies().then(function(data) {
  console.log(util.inspect(data, false, null, true));
}, function(error) {
  console.error(error);
});