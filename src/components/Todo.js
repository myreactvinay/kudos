import React from "react";

var user = localStorage.getItem("userN");
var DATE_OPTIONS = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};

const Todo = ({ id, onClick, completed, text }) => (
  <li id={"todotag" + id} className="py-2 h-auto">
    <div className="row">
      <span className="px-2">
        <strong>
          <h5>{user}</h5>
        </strong>
      </span>
      <span> {new Date().toLocaleDateString("en-US", DATE_OPTIONS)}</span>
    </div>
    <div>
      <div>{text}</div>
      <div>
        <img
          height="15"
          alt="like"
          width="20"
          src={require("../icons/like.png")}
        />
        <img
          alt="delete"
          className="pl-2"
          height="15"
          width="25"
          src={require("../icons/removeicon.png")}
        />
      </div>
    </div>
  </li>
);

export default Todo;
