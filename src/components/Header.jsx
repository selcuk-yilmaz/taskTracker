import { useState } from "react";
import AddTaskForm from "./AddTaskForm";



const Header = ({tasks,setTasks}) => {
  const [control, setControl] = useState(true)

  const handleButton =()=>{
    setControl(!control);

  }
  return (
    <header>
      <h1>Task Tracker</h1>
      <button onClick={handleButton} type="button" className= {control ? "btn btn-primary" : "btn btn-danger"}>
        {control ? "Show Add Task Bar" : "Close Add Task Bar"}
      </button>
      {control && <AddTaskForm tasks={tasks} setTasks={setTasks} />}
    </header>
  );
};

export default Header;
