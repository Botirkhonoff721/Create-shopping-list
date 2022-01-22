import React, { useState, useReducer } from "react";
import "./App.css";
import Todo from "./Todo";
const App = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          { id: Date.now(), name: action.payload.name, completed: false },
        ];
      case "toggle":
        return state.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        });
      case "delete":
        return state.filter((todo) => todo.id !== action.payload.id);
      default:
        return state;
    }
  };
  const [name, setName] = useState(" ");
  const [todos, dispatch] = useReducer(reducer, []);

  const handleSubmit = () => {
    dispatch({ type: "add", payload: { name: name } });
    setName(" ");
  };
  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="Container">
      <input onChange={onChange} value={name} type="text" />
      <button onClick={handleSubmit}>Submit</button>
      <div>
         'LEARNING REDUCER'
        {todos.map((value) => {
          return(
            <>
             <Todo value={value} dispatch={dispatch} />;
          </>
            )
        })}
      </div>
    </div>
  );
};

export default App;
