// import { geoOptions } from './contants.js';
import {
  hasSimPermission,
  requestSimPermission,
  gpsWifiPersmission,
  hasSMSPermission,
  requestSMSPermission,
} from "./permissionUtils.js";
import { getPosition, getSimInfo, sendSMS } from "./utils.js";

// Kaleitai amesws me thn ekkinish ths efarmoghs
export const onDeviceReady = async () => {
  const locationAccuracy = window.cordova.plugins.locationAccuracy;
  const diagnostic = window.cordova.plugins.permissions;
  const device = window.device;
  var details = null;

  await gpsWifiPersmission()
    .then((success) => {
      console.log("Successfully requested accuracy: " + success.message);
    })
    .catch((error) => {
      console.error(
        "Accuracy request failed: error code=" +
          error.code +
          "; error message=" +
          error.message
      );
      if (error.code !== locationAccuracy.ERROR_USER_DISAGREED) {
        if (
          window.confirm(
            "Αποτυχία κατά την αυτόματη ενεργοποίηση της λειτουργίας 'Υψηλής ακρίβειας. Θα θέλατε να μεταβείτε στις ρυθμίσεις τοποθεσίας και να το ενεργοποιήσετε χειροκίνητα;"
          )
        ) {
          diagnostic.switchToLocationSettings();
        }
      }
    });

  // var uuid = device.uuid; //mporei na xrisimopoih8ei anti gia IMEI

  let platform = device.platform;
  let version = device.version;

  let request;

  if (platform === "Android" && version < 10) {
    await hasSimPermission()
      .then((status) => {
        console.log(status);
        request = status.hasPermission;
      })
      .catch((error) => {
        console.log(error);
      });

    if (request !== true) {
      await requestSimPermission()
        .then((status_r) => {
          console.log(status_r);
        })
        .catch((error_r) => {
          console.log(error_r);
        });
    }
  }

  let request_2;
  await hasSMSPermission()
    .then((status) => {
      console.log("hasSimPermission: " + status);
      request_2 = status.hasPermission;
      console.log("hasSimPermissionS status: " + status.hasPermission);
    })
    .catch((error) => {
      console.log(error);
    });

  if (request_2 !== true) {
    await requestSMSPermission()
      .then((status_r) => {
        console.log(status_r);
      })
      .catch((error_r) => {
        console.log(error_r);
      });
  }

  let locData;
  await getPosition()
    .then((position) => {
      locData = {
        lt: position.coords.latitude,
        lg: position.coords.longitude,
        rd: position.coords.accuracy,
        top: position.timestamp, //Time of Position
        // lc: , Level of Confidence, sundeetai me to terrain kai ton kairo ths ka8e periptvshs (???)
      };
    })
    .catch((error) => {
      alert("code: " + error.code + "\n" + "message: " + error.message + "\n");
    });

  console.log(locData);

  let simData;
  await getSimInfo()
    .then((result) => {
      simData = {
        si: result.subscriberId,
        ei: result.deviceId,
        mcc: result.mcc,
        mnc: result.mnc,
      };
    })
    .catch((error) => {
      console.log(error);
    });

  details = { locData, simData }; // loc? , messege length
  localStorage.setItem("sosDetails", JSON.stringify(details));
};

export default onDeviceReady;
