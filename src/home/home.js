import React from "react";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

class home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="px-5 mx-5 py-5 my-5">
          <h3 className="mb-4">Post Kudos</h3>
          <AddTodo />
          <VisibleTodoList />
        </div>
      </React.Fragment>
    );
  }
}

export default home;
