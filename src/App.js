import React from "react";

import HeaderMain from "./components/HeaderMain.js";
import DividerHidden from "./components/DividerHidden.js";
import MenuBasic from "./components/MenuBasic.js";
import MainPage from "./components/MainPage.js";
import ExtraDetails from "./components/ExtraDetails.js";
import Route from "./components/Route.js";
import QnAQuestions from "./components/QnAQuestions.js";

const App = () => {
  return (
    <div class="ui center aligned container">
      <HeaderMain />
      <DividerHidden />
      <MenuBasic />
      <DividerHidden />

      <Route path="/">
        <MainPage />
      </Route>
      <Route path="/qna">
        <QnAQuestions />
      </Route>
      <Route path="/extra">
        <ExtraDetails />
      </Route>
    </div>
  );
};

export default App;
