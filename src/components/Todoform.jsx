import { useState } from "react";
import "./Todoform.css";

const Todoform = ({submittedtask}) => {
  const [Newtask, setNewtask] = useState("");

  const Handlesubmit = (e) => {
    e.preventDefault();
    submittedtask(Newtask)

    setNewtask('')
  }


//[...arraytask, { id:arraytask.length+1, title:Newtask}]





      /*setArraytask(( currenttask)=>{
    return [...currenttask,{title:Newtask}]
   } )
  */

  //};
 
  return (
    <>
      <div>
        <form action="" onSubmit={Handlesubmit}>
          <label htmlFor="item"> </label>
          <input
            id="item"
            value={Newtask}
            type="text"
            placeholder="kindly input your task here "
            onChange={(e) => setNewtask(e.target.value)}
          />
           <button>Save Task</button>
        </form>
       
      </div>
    </>
  );
};

export default Todoform;
