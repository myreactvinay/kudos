import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }

          localStorage.setItem("dat", input.value);
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <textarea className="form-control" ref={(node) => (input = node)} />
        <button type="submit" className="btn btn-primary float-right mt-2">
          Post
        </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
