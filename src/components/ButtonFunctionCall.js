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
      onClick={() =>
        window.confirm(
          "Ετοιμάζεστε να αποστείλετε από την συσκευή σας ένα μήνυμα έκτακτης ανάγκης. Η κατάχρηση της υπηρεσίας μπορεί να οδηγήσει σε νομικές κυρώσεις. Θέλετε να συνεχίσετε;"
        ) && dispatchSms()
      }
    ></Button>
  );
};

const dispatchSms = () => {
  const sosDetailsJsonString = localStorage.getItem("sosDetails");
  const extraDetailsJsonString = localStorage.getItem("extraDetails");
  const detailsLen = String(
    sosDetailsJsonString.length + extraDetailsJsonString.length
  );
  let details = {
    devD: JSON.parse(sosDetailsJsonString),
    extD: JSON.parse(extraDetailsJsonString),
    len: parseInt(detailsLen) + detailsLen.length + 24,
  };

  sendSMS(details)
    .then((success) => {
      alert("Επιτυχής αποστολή μηνύματος");
    })
    .catch((error) => {
      alert(
        "Αποτυχία αποστολής με σφάλμα: " +
          error +
          ". Ελέγξτε τα δικαιώματα της εφαρμογής ή σε κάθε άλλη περίπτωση επκοινωνήστε με το support, ενημερώνοντάς τους των κωδικό του σφάλματος."
      );
    });
};

export default ButtonFunctionCall;
