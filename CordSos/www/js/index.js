// Ekkinish efarmoghs
document.addEventListener('deviceready', onDeviceReady, false);

// Proeretikes ri8miseis tou Geolocation
let geoOptions = {
  timeout: 5000,
  enableHighAccuracy: true
};



// Dhmiourgeite ena promise pou gurnaei thn 8esi an petuxei, alliws error
const getPosition = geoOptions => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, geoOptions);
  });
}

function getSimInfo() {
  return new Promise((resolve, reject) => {
    window.plugins.sim.getSimInfo(resolve, reject);
  });
}

function hasSimPermission() {
  return new Promise((resolve, reject) => {
    cordova.plugins.permissions.checkPermission(permissions.READ_PHONE_STATE, resolve, reject);
  });
}

function requestSimPermission() {
  return new Promise((resolve, reject) => {
    cordova.plugins.permissions.requestPermission(permissions.READ_PHONE_STATE, resolve, reject);
  });
}

function gpsWifiPersmission() {
  var WifiManager = cordova.plugins.WifiManager;
  WifiManager.setWifiEnabled(true, function (err, success) {
    console.log(err, success)
  });

  return new Promise((resolve, reject) => {
    cordova.plugins.locationAccuracy.request(resolve, reject, cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
  });
}

function hasSMSPermission() {
  return new Promise((resolve, reject) => {
    cordova.plugins.permissions.checkPermission(permissions.SEND_SMS, resolve, reject);
  });
}

function requestSMSPermission() {
  return new Promise((resolve, reject) => {
    cordova.plugins.permissions.requestPermission(permissions.SEND_SMS, resolve, reject);
  });
}

function sendSMS(text){
  let number = "+306931580646";
  let message  = JSON.stringify(text);

  let options = {
    replaceLineBreaks: false, // true to replace \n by a new line, false by default
    android: {
        // intent: 'INTENT'  // send SMS with the native android SMS messaging
        intent: '' // send SMS without opening any other app, require : android.permission.SEND_SMS and android.permission.READ_PHONE_STATE
    }
  };

  return new Promise((resolve, reject) => {
    sms.send(number, message, options, resolve, reject);
  })
}

// Kaleitai amesws me thn ekkinish ths efarmoghs
async function onDeviceReady() {

  await gpsWifiPersmission()
    .then((success) => {
      console.log("Successfully requested accuracy: "+success.message);
    })
    .catch((error) => {
      console.error("Accuracy request failed: error code="+error.code+"; error message="+error.message);
      if(error.code !== cordova.plugins.locationAccuracy.ERROR_USER_DISAGREED){
        if(window.confirm("Failed to automatically set Location Mode to 'High Accuracy'. Would you like to switch to the Location Settings page and do this manually?")){
          cordova.plugins.diagnostic.switchToLocationSettings();
        }
      }
    });

  var uuid = device.uuid; //mporei na xrisimopoih8ei anti gia IMEI

  let platform = device.platform;
  let version = device.version;

  permissions = cordova.plugins.permissions;

  if (platform == "Android" && version < 10) {
    await hasSimPermission()
  .then((status) => {
    console.log(status);
    request = status.hasPermission;
  })
  .catch((error)=> {
    console.log(error);
  });

  if (request != true) {
    await requestSimPermission()
      .then((status_r) => {
        console.log(status_r);
      })
      .catch((error_r) => {
        console.log(error_r);
      });
  }
  }

  await hasSMSPermission()
  .then((status) => {
    console.log(status);
    request_2 = status.hasPermission;
  })
  .catch((error)=> {
    console.log(error);
  });

  if (request_2 != true) {
    await requestSMSPermission()
      .then((status_r) => {
        console.log(status_r);
      })
      .catch((error_r) => {
        console.log(error_r);
      });
  }

  
  
  await getPosition()
  .then((position) => {
    locData = {
      lt:  position.coords.latitude,
      lg:  position.coords.longitude,
      rd:  position.coords.accuracy,
      top: position.timestamp, //Time of Position
      lc:  position.coords.accuracy //Level of Confidence, sundeetai me to terrain kai ton kairo ths ka8e periptvshs (???)
    };
  })
  .catch((error) => {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
  });
  
  console.log(locData);
  
  await getSimInfo()
  .then((result) => {
    simData = {
      si:  result.subscriberId,
      ei:  result.deviceId,
      mcc: result.mcc,
      mnc: result.mnc
    };
  })
  .catch((error) => {
    console.log(error);
  });

  console.log(simData);

  test = {locData, simData} ; // loc? , messege length
  console.log(test);

  await sendSMS(test)
  .then((success) => {
    alert('Message sent successfully');
  })
  .catch((error) => {
    alert('Message Failed:' + error);
  })
}

