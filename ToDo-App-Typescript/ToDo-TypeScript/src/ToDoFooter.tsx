
interface FooterProps {
    listLength: number;
    clearAll(): void;
  }
  
  const ToDoFooter = ({ listLength, clearAll }: FooterProps) => {
    return (
      <div className="footer">
        <div>You have {listLength} pending tasks.</div>
        <button onClick={clearAll}>Clear All</button>
      </div>
    );
  };
  
  export default ToDoFooter;
  