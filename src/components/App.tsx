import React from "react";
import Navbar from "./Navbar";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div className="uk-container">
      <Navbar />
      <TodoList />
    </div>
  );
};

export default App;
