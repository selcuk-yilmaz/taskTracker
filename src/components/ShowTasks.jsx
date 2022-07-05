import { MdClear } from "react-icons/md";
import { FcCheckmark } from "react-icons/fc";

const ShowTasks = ({ tasks, setTasks }) => {

  return (
    <div>
      {tasks.map((item) => {
        return (
          <ul key={item.id}>
            <li className={item.isDone ? "inva text-decoration-line-through ": "inva" }>
              <FcCheckmark
              onClick={()=>{setTasks(
                tasks.map((task) =>
                  task.id === item.id ? { ...item, isDone: true } : item)
              )
            }}
              />
               {/* {console.log(item.isDone)} */}
              {item.task} <br /> 
              <MdClear
                onClick={() => {
                  setTasks(tasks.filter((task) => task.id !== item.id));
                }}
                className="mdclear"
              />{item.date}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default ShowTasks;
