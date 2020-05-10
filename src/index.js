import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import rootReducer from "./reducers";
import "bootstrap/dist/css/bootstrap.min.css";
const store = createStore(rootReducer);
var user = localStorage.getItem("userN");

render(
  <React.Fragment>
    <nav className="navbar d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-0 bg-white border-bottom shadow-sm">
      <span className="navbar-brand">Kudos</span>
      <ul
        className={
          user !== null ? "navbar-nav px-3 d-inline" : "navbar-nav px-3 d-none"
        }
      >
        <li class="nav-item text-nowrap d-inline px-4">
          User : <strong>{user}</strong>
        </li>
        <li className="nav-item text-nowrap d-inline">
          <button
            className="btn btn-sm btn-outline-secondary  d-inline"
            onClick={(e) => {
              e.preventDefault();
              localStorage.removeItem("userN");
              window.location.reload(true);
              window.location.href = "/";
            }}
          >
            Signout
          </button>
        </li>
      </ul>
    </nav>
    <Provider store={store}>
      <App />
    </Provider>
    <footer className="bg-dark py-5">
      <div className="container">
        <p className="text-white">Kudos@2020</p>
      </div>
    </footer>
  </React.Fragment>,
  document.getElementById("root")
);
