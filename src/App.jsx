import { useState } from "react"
import Todoform from "./components/Todoform"

import Todolist from "./components/Todolist"
import './App.css'

const App=()=>{

  const [arraytask, setArraytask] = useState([]);
  const addtask=(taskname)=>{
    setArraytask((currenttask)=>{
      return [...currenttask, { id:arraytask.length+1, taskname}]
    })
   
  }
  console.log(arraytask);
  return(
    <> 
    <h2>TO-DO APP</h2>

    <Todoform submittedtask={addtask} ></Todoform>
    <Todolist Mylist={arraytask} ></Todolist>
    </>
  )
}

export default App