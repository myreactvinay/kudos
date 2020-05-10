import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }) => (
  <ul className="px-1 my-5">
    <l1>
      <h3 className="py-4">Latest Kudos</h3>
    </l1>
    {todos.map((todo) => (
      <Todo
        id={todo.id}
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    ))}
  </ul>
);

export default TodoList;
