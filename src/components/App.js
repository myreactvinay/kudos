import React from "react";
import Routes from "../Routes.js";

const App = () => (
  <React.Fragment>
    <div
      className="bg-white row align-items-center ml-0 mr-0"
      style={{ height: "auto" }}
    >
      <div className="container my-6">
        <Routes />
      </div>
    </div>
  </React.Fragment>
);

export default App;
