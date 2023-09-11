import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "./../features/todo/todoSlice";
const TODOS = () => {
  const todos = useSelector((state) => state.todos);
  // console.log(todos)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>todos</h1>
      {todos.map((todo) => (
        <li key={todo.id}>
          <div>{todo.text}</div>
          <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
        </li>
      ))}
    </div>
  );
};

export default TODOS;
