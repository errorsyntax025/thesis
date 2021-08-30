export const hasSimPermission = () => {
  const permissions = window.cordova.plugins.permissions;
    return new Promise((resolve, reject) => {
      permissions.checkPermission(permissions.READ_PHONE_STATE, resolve, reject);
    });
};
  
export const requestSimPermission = () => {
  const permissions = window.cordova.plugins.permissions;
    return new Promise((resolve, reject) => {
      permissions.requestPermission(permissions.READ_PHONE_STATE, resolve, reject);
    });
};
  
export const gpsWifiPersmission = () => {
  const locationAccuracy = window.cordova.plugins.locationAccuracy;
  const WifiManager = window.cordova.plugins.WifiManager;
    WifiManager.setWifiEnabled(true, function (err, success) {
        console.log(err, success)
    });
  
    return new Promise((resolve, reject) => {
      locationAccuracy.request(resolve, reject, locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
    });
};
  
export const hasSMSPermission = () => {
  const permissions = window.cordova.plugins.permissions;
    return new Promise((resolve, reject) => {
      permissions.checkPermission(permissions.SEND_SMS, resolve, reject);
    });
};
  
export const requestSMSPermission = () => {
  const permissions = window.cordova.plugins.permissions;
    return new Promise((resolve, reject) => {
      permissions.requestPermission(permissions.SEND_SMS, resolve, reject);
    });
};