import { render } from "react-dom";
import ToDo from "./ToDo";
// import { Link } from "react-router-dom";

const App = () => {
  return <ToDo />;
};
render(<App />, document.getElementById("root"));

/*
import { render } from "react-dom";
import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTask = (task) => {
    const newTask = { task: task, id: Math.random };
    setTodoList([...todoList, newTask]);
  };
  const deleteTask = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };
  return (
    <div>
      <h1>Todp App</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => addTask(todo)}>Add</button>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={() => deleteTask(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

render(<App />, document.getElementById("root"));
export default <App />;*/
