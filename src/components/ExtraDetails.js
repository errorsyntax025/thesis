import React, { useState } from "react";

const ExtraDetails = () => {
  let details = localStorage.getItem("extraDetails")
    ? JSON.parse(localStorage.getItem("extraDetails"))
    : {};
  const [extraDetails, setExtraDetails] = useState(details);
  // if (localStorage.getItem("extraDetails")) {
  //   setExtraDetails(JSON.parse(localStorage.getItem("extraDetails")));
  // }

  const saveExtraDetails = (event) => {
    event.preventDefault();
    let details = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      allergies: event.target.allergies.value,
      medicines: event.target.medicines.value,
      blood: event.target.blood.value,
      weight: event.target.weight.value,
      contactName: event.target.contactName.value,
      contactNumber: event.target.contactNumber.value,
    };
    localStorage.setItem("extraDetails", JSON.stringify(details));
    setExtraDetails(details);
  };

  return (
    <div>
      <div class="ui attached message">
        <div class="header">Βοηθητικές πληροφορίες</div>
        <p>
          Οι παρακάτω πληροφορίες δεν χρειάζονται για την λειτουργία της
          εφαρμογής, παρόλα αυτά αποτελούν ορισμένες φορές καθοριστικές
        </p>
      </div>

      <form class="ui form attached fluid segment" onSubmit={saveExtraDetails}>
        <div class="two fields">
          <div class="field">
            <label>Όνομα</label>
            <input
              type="text"
              name="firstName"
              placeholder="Όνομα"
              defaultValue={extraDetails.firstName}
            ></input>
          </div>
          <div class="field">
            <label>Επώνυμο</label>
            <input
              type="text"
              name="lastName"
              placeholder="Επώνυμο"
              defaultValue={extraDetails.lastName}
            ></input>
          </div>
        </div>

        <h4 class="ui dividing header">Ιατρικό προφίλ</h4>
        <div class="field">
          <label>Αλλεργίες</label>
          <input
            type="text"
            name="allergies"
            placeholder="Αλλεργίες και πιθανές παρενέργειες"
            maxLength="120"
            defaultValue={extraDetails.allergies}
          ></input>
        </div>
        <div class="field">
          <label>Φάρμακα</label>
          <input
            type="text"
            name="medicines"
            placeholder="Καθημερινές φαρμακευτικές αγωγές"
            maxLength="120"
            defaultValue={extraDetails.medicines}
          ></input>
        </div>
        <div class="field">
          <label>Τύπος αίματος</label>
          <input
            type="text"
            name="blood"
            placeholder="Τύπος αίματος"
            maxLength="4"
            defaultValue={extraDetails.blood}
          ></input>
        </div>
        <div class="field">
          <label>Βάρος</label>
          <input
            type="number"
            name="weight"
            placeholder="Βάρος σώματος σε κιλά"
            maxLength="3"
            min="0"
            defaultValue={extraDetails.weight}
          ></input>
        </div>

        <h4 class="ui dividing header">Έκτακτη Επαφή</h4>
        <div class="field">
          <label>Όνομα έκτακτης επαφής</label>
          <input
            type="text"
            name="contactName"
            placeholder="Το άτομο που επιθημείτε να ενημερωθεί"
            maxLength="30"
            defaultValue={extraDetails.contactName}
          ></input>
        </div>
        <div class="field">
          <label>Νούμερο έκτακτης επαφής</label>
          <input
            type="text"
            name="contactNumber"
            placeholder="Τηλεφωνικός αριθμός"
            maxLength="12"
            defaultValue={extraDetails.contactNumber}
          ></input>
        </div>

        <button
          class="ui red submit button"
          onClick={() => alert("Αποθήκευση επιλογών")}
        >
          Submit
        </button>
      </form>
      <br></br>
    </div>
  );
};

export default ExtraDetails;
