import { useState } from "react";
import Modal from "./Modal";

const ToDoItem = ({ title, id, delFromList }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [showModal, setshowModal] = useState(false);

  const toggleShowModal = () => {
    setshowModal(!showModal);
  };

  const handleCompleteTodo = () => {
    setIsCompleted(!isCompleted);
  };

  const handleDeleteTodo = () => {
    delFromList(id);
    toggleShowModal();
  };

  return (
    <div className="todoItem">
      {<div className={isCompleted ? "completed" : ""}> {title}</div>}
      <div className="buttons">
        <div onClick={toggleShowModal}>
          <i className="fa-solid fa-trash"></i>
        </div>
        {showModal ? (
          <Modal>
            <div>
              <h4>Would you like to delete this task? </h4>
              <div className="modal-buttons">
                <button onClick={handleDeleteTodo}>Yes</button>
                <button onClick={toggleShowModal}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
        <div onClick={handleCompleteTodo}>
          <i className="fa-regular fa-circle-check"></i>
        </div>
      </div>
    </div>
  );
};
export default ToDoItem;

