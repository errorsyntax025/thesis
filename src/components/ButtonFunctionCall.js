import React from "react";
import { sendSMS } from "../utils.js";
import { Icon } from "semantic-ui-react";
import Button from "./Button.js";
import "../css/SmsButton.css";

const ButtonFunctionCall = () => {
  return (
    <Button
      color="red"
      children={<Icon name="emergency" size="massive" />}
      className="send-sms-button"
      onClick={() => dispatchSms()}
    ></Button>
  );
};

const dispatchSms = () => {
  let details = {
    emergencyDetails: JSON.parse(localStorage.getItem("sosDetails")),
    extraDetails: JSON.parse(localStorage.getItem("extraDetails")),
  };

  sendSMS(details)
    .then((success) => {
      alert("Επιτυχής αποστολή μηνύματος");
    })
    .catch((error) => {
      alert("Αποτυχία αποστολής:" + error);
    });
};

export default ButtonFunctionCall;
