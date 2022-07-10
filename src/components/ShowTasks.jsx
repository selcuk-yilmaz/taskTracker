import { MdClear } from "react-icons/md";
import { FcCheckmark } from "react-icons/fc";
// import { useState } from "react";

const ShowTasks = ({ tasks, setTasks }) => {
// const [info, setİnfo] = useState({isDone:true})

const line=(id)=>{
  setTasks(tasks.map((tsk)=>{
    if(tsk.id===id){
      return{...tsk,isDone:!tsk.isDone}
    }else{
      return tsk
    }
  }))
  // const newline={isDone:false}
  // setİnfo(...info,newline)
}
  
  return (
    <div>
      {tasks.map((item) => {
        return (
          <ul key={item.id}>
            <li className={item.isDone ? "inva text-decoration-line-through" : "inva" }>
              <FcCheckmark
              onClick={()=>line(item.id)}
              // onClick={()=>{setTasks(
              //   tasks
              //     .filter((task) => task.id === item.id)
              //     .map(() => ({ ...item, isDone: !item.isDone }))
                // .map((tsk) =>
                //   tsk.id === item.id ? { ...item, isDone: !item.isDone } : item)
            //   );
            // }}
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
       <p>{console.log(tasks)}</p> 
    </div>
  );
};

export default ShowTasks;
