var netatmo = require('./netatmo');

var auth = {
  "client_id": "",
  "client_secret": "",
  "username": "",
  "password": ""
};

var api = new netatmo(auth);

var getHomesData = function(err, data) {
  console.log(data);
};

var getHomeData = function(err, data) {
  console.log(data);
};

var handleEvents = function(err, data) {
  console.log(data.events_list);
};


// Event Listeners
api.on('get-homedata', getHomeData);
api.on('get-homesdata', getHomesData);

// Get Thermostats Data
// See docs: https://dev.netatmo.com/dev/resources/technical/reference/thermostat/getthermostatsdata
var options = {
};

// getHomesData
console.log("calling getHomesData");
api.getHomesData(options);
//api.getHomesData();
