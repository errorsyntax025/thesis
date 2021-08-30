import { geoOptions } from "./contants.js";

// Dhmiourgeite ena promise pou gurnaei thn 8esi an petuxei, alliws error
export const getPosition = () => {
  const navigator = window.navigator;
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, geoOptions);
  });
};

export const getSimInfo = () => {
  const sim = window.plugins.sim;
  console.log(window);

  return new Promise((resolve, reject) => {
    sim.getSimInfo(resolve, reject);
  });
};

export const sendSMS = (text) => {
  const sms = window.sms;

  let number = "+306931580646";
  let message = JSON.stringify(text);

  let options = {
    replaceLineBreaks: false, // true to replace \n by a new line, false by default
    android: {
      // intent: 'INTENT'  // send SMS with the native android SMS messaging
      intent: "", // send SMS without opening any other app, require : android.permission.SEND_SMS and android.permission.READ_PHONE_STATE
    },
  };

  return new Promise((resolve, reject) => {
    sms.send(number, message, options, resolve, reject);
  });
};
