import { useState } from "react";



const AddTaskForm = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id =new Date().getTime();
    const newTask={id:id,task:task,date:date,isDone:false}
    setTasks([...tasks,newTask])
    setTask("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">
            Add Task
          </label>
          <input
            type="text"
            id="task"
            className="form-control"
            placeholder="Add your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">
            Add date
          </label>
          <input
            type="date"
            id="date"
            className="form-control"
            placeholder="Add your date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default AddTaskForm;
