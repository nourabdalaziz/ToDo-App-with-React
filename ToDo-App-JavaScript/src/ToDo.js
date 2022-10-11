import { useState, useEffect } from "react";
import ToDoHeader from "./ToDoHeader";
import ToDoItem from "./ToDoItem";
import ToDoFooter from "./ToDoFooter";

const ToDo = () => {
  const [todoList, setToDoList] = useState([]);
  const storage = localStorage.getItem("todos");

  useEffect(() => {
    const localTodos = storage ? JSON.parse(storage) : [];
    setToDoList(localTodos);
  }, []);

  const addTodoToList = (todo) => {
    localStorage.setItem("todos", JSON.stringify([...todoList, todo]));
    setToDoList([...todoList, todo]);
  };

  const delFromList = (id) => {
    const newList = todoList.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify([...newList]));
    setToDoList(newList);
  };

  const clearAll = () => {
    setToDoList([]);
  };

  return (
    <div className="todolist">
      <h1>To Do App</h1>
      <div className="items">
        <ToDoHeader addToList={addTodoToList} />

        {todoList.length
          ? todoList.map((todo) => (
              // eslint-disable-next-line
              <ToDoItem
                title={todo.title}
                id={todo.id}
                delFromList={delFromList}
              />
            ))
          : null}
      </div>
      <ToDoFooter listLength={todoList.length} clearAll={clearAll} />
    </div>
  );
};
export default ToDo;
