const ToDoFooter = ({ listLength, clearAll }) => {
  return (
    <div className="footer">
      <div>You have {listLength} pending tasks.</div>
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
};

export default ToDoFooter;
