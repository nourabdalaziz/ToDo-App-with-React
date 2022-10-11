import { useState } from "react";

const ToDoHeader = ({ addToList }) => {
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    const newTodo = {
      title: todo,
      id: Math.random(),
    };
    addToList(newTodo);
    setTodo("");
  };

  return (
    <div>
      <input className="inputField"
      placeholder="What to do .."
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="addBtn" onClick={handleAddTodo}>+</button>
    </div>
  );
};
export default ToDoHeader;
