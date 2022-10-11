import { useState } from "react";

interface Task {
  title: string;
  id: number;
}
interface HeaderProps {
  addToList(todo: Task): void;
}

const ToDoHeader = ({ addToList }: HeaderProps) => {
  const [todo, setTodo] = useState<string>("");

  const handleAddTodo = (): void => {
    const newTodo = {
      title: todo,
      id: Math.random(),
    };
    addToList(newTodo);
    setTodo("");
  };

  return (
    <div>
      <input
        className="inputField"
        placeholder="What to do .."
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="addBtn" onClick={handleAddTodo}>
        +
      </button>
    </div>
  );
};
export default ToDoHeader;
