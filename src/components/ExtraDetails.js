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
      fn: event.target.firstName.value,
      ln: event.target.lastName.value,
      alrg: event.target.allergies.value,
      med: event.target.medicines.value,
      bld: event.target.blood.value,
      kg: event.target.weight.value,
      cName: event.target.contactName.value,
      cNum: event.target.contactNumber.value,
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
          εφαρμογής, παρόλα αυτά αποτελούν ορισμένες φορές καθοριστικές.
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
              maxLength="30"
              defaultValue={extraDetails.fn}
            ></input>
          </div>
          <div class="field">
            <label>Επώνυμο</label>
            <input
              type="text"
              name="lastName"
              placeholder="Επώνυμο"
              maxLength="30"
              defaultValue={extraDetails.ln}
            ></input>
          </div>
        </div>

        <h4 class="ui dividing header">Ιατρικό προφίλ</h4>
        <div class="field">
          <label>Γνωστές αλλεργίες</label>
          <input
            type="text"
            name="allergies"
            placeholder="Αλλεργίες και πιθανές παρενέργειες"
            maxLength="120"
            defaultValue={extraDetails.alrg}
          ></input>
        </div>
        <div class="field">
          <label>Φαρμακακευτικές αγωγές</label>
          <input
            type="text"
            name="medicines"
            placeholder="Καθημερινές φαρμακευτικές αγωγές"
            maxLength="120"
            defaultValue={extraDetails.med}
          ></input>
        </div>
        <div class="field">
          <label>Τύπος αίματος</label>
          <input
            type="text"
            name="blood"
            placeholder="Τύπος αίματος"
            maxLength="20"
            defaultValue={extraDetails.bld}
          ></input>
        </div>
        <div class="field">
          <label>Σωματικό βάρος</label>
          <input
            type="number"
            name="weight"
            placeholder="Βάρος σώματος σε κιλά"
            maxLength="3"
            min="0"
            defaultValue={extraDetails.kg}
          ></input>
        </div>

        <h4 class="ui dividing header">Έκτακτη Επαφή</h4>
        <div class="field">
          <label>Όνομα έκτακτης επαφής</label>
          <input
            type="text"
            name="contactName"
            placeholder="Το άτομο που επιθημείτε να ενημερωθεί"
            maxLength="50"
            defaultValue={extraDetails.cName}
          ></input>
        </div>
        <div class="field">
          <label>Τηλέφωνο επικοινωνίας έκτακτης επαφής</label>
          <input
            type="text"
            name="contactNumber"
            placeholder="Τηλεφωνικός αριθμός"
            maxLength="14"
            defaultValue={extraDetails.cNum}
          ></input>
        </div>

        <button
          class="ui red submit button"
          onClick={() => alert("Οι πληροφορίες σας αποθηκεύτηκαν επιτυχώς")}
        >
          Αποθήκευση
        </button>
      </form>
      <br></br>
    </div>
  );
};

export default ExtraDetails;
