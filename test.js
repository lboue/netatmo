const Netatmo = require('./netatmo');

const auth = {
  access_token: '52d42f05177759882c8b456a|753293ecafa4f4b1a9604611adc998e9',
  client_id: '',
  client_secret: '',
  username: '',
  password: ''
};

const api = new Netatmo(auth);

api.on('error', err => {
  console.error(err);
});

// EXAMPLE #1

// Get Stations Data
// See docs: https://dev.netatmo.com/dev/resources/technical/reference/weatherstation/getstationsdata
api.getStationsData((err, devices) => {
  if (err) {
    console.error(err);
  }
  console.log(devices);
  console.log(devices[0]._id);
});

// Get Measure
// See docs: https://dev.netatmo.com/dev/resources/technical/reference/common/getmeasure
api.getMeasure(
  {
    device_id: '70:ee:50:00:02:20',
    scale: 'max',
    type: ['Temperature', 'CO2', 'Humidity', 'Pressure', 'Noise']
  },
  (err, measure) => {
    if (err) {
      console.error(err);
    }

    console.log(measure.length);
    console.log(measure[0]);
  }
);

// Set Sync Schedule
// See docs: https://dev.netatmo.com/dev/resources/technical/reference/thermostat/syncschedule
api.setSyncSchedule({
  device_id: '',
  module_id: '',
  zones: [
    {type: 0, id: 0, temp: 19},
    {type: 1, id: 1, temp: 17}
  ],
  timetable: [
    {m_offset: 0, id: 1},
    {m_offset: 420, id: 0},
    {m_offset: 480, id: 4}
  ]
}, (err, status) => {
  if (err) {
    console.error(err);
  }

  console.log(status);
});

// Set Thermpoint
// See docs: https://dev.netatmo.com/dev/resources/technical/reference/thermostat/setthermpoint
api.setThermpoint({
  device_id: '',
  module_id: '',
  setpoint_mode: ''
}, (err, status) => {
  if (err) {
    console.error(err);
  }

  console.log(status);
});

// EXAMPLE #2

// Event Listeners
api.on('get-stationsdata', (err, devices) => {
  if (err) {
    console.error(err);
  }

  console.log(devices);
});

api.on('get-measure', (err, measure) => {
  if (err) {
    console.error(err);
  }

  console.log(measure.length);
  console.log(measure[0]);
});

api.on('get-thermostatsdata', (err, devices) => {
  if (err) {
    console.error(err);
  }

  console.log(devices);
});

api.on('set-syncschedule', (err, status) => {
  if (err) {
    console.error(err);
  }

  console.log(status);
});

api.on('set-thermpoint', (err, status) => {
  if (err) {
    console.error(err);
  }
  console.log(status);
});

api.on('get-homedata', (err, data) => {
  if (err) {
    console.error(err);
  }

  console.log(data);
});

api.on('get-nextevents', (err, data) => {
  if (err) {
    console.error(err);
  }

  console.log(data.events_list);
});

api.on('get-lasteventof', (err, data) => {
  if (err) {
    console.error(err);
  }

  console.log(data.events_list);
});

api.on('get-eventsuntil', (err, data) => {
  if (err) {
    console.error(err);
  }

  console.log(data.events_list);
});

// Get Stations Data
// See docs: https://dev.netatmo.com/doc/methods/getstationsdata
api.getStationsData();

// Get Measure
// See docs: https://dev.netatmo.com/dev/resources/technical/reference/common/getmeasure
api.getMeasure({
  device_id: '',
  scale: 'max',
  type: ['Temperature', 'CO2', 'Humidity', 'Pressure', 'Noise']
});

// Get Thermostats Data
// See docs: https://dev.netatmo.com/dev/resources/technical/reference/thermostat/getthermostatsdata
api.getThermostatsData({
  device_id: ''
});

// Set Sync Schedule
// See docs: https://dev.netatmo.com/dev/resources/technical/reference/thermostat/syncschedule
api.setSyncSchedule({
  device_id: '',
  module_id: '',
  zones: [
    {type: 0, id: 0, temp: 19},
    {type: 1, id: 1, temp: 17}
  ],
  timetable: [
    {m_offset: 0, id: 1},
    {m_offset: 420, id: 0},
    {m_offset: 480, id: 4}
  ]
});

// Set Thermstate
// See docs: https://dev.netatmo.com/dev/resources/technical/reference/thermostat/setthermpoint
api.setThermpoint({
  device_id: '',
  module_id: '',
  setpoint_mode: ''
});

// Get Home Data
// https://dev.netatmo.com/dev/resources/technical/reference/cameras/gethomedata
api.getHomeData();

// Get Next Events
// See docs: https://dev.netatmo.com/dev/resources/technical/reference/cameras/getnextevents
api.getNextEvents({
  home_id: '',
  event_id: ''
});

// Get Last Event Of
// See docs: https://dev.netatmo.com/dev/resources/technical/reference/cameras/getlasteventof
api.getLastEventOf({
  home_id: '',
  person_id: ''
});

// Get Events Until
// See docs: https://dev.netatmo.com/dev/resources/technical/reference/cameras/geteventsuntil
api.getEventsUntil({
  home_id: '',
  event_id: ''
});

// Get Camera Picture
// See docs: https://dev.netatmo.com/dev/resources/technical/reference/cameras/getcamerapicture
api.getCameraPicture({
  image_id: '',
  key: ''
});

// Get Healthy Home Coach Data
// See docs: https://dev.netatmo.com/dev/resources/technical/reference/healthyhomecoach/gethomecoachsdata
api.getHealthyHomeCoachData({
  device_id: ''
});
