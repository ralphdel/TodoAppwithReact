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

  const deletetask=(id)=>{
      setArraytask((currenttask)=>{
        return (
          currenttask.filter((Eachtask)=> Eachtask.id !== id)
        )
      })
  }

  const edittask=(id)=>{
    setArraytask((currenttask)=>{
      return(
        currenttask.map((Eachtask, Newtext)=>{
          if (Eachtask.id===id) {
            return{...Eachtask, Text:Newtext}
          }
        })
      )
    })
  }
  //console.log(id);
  return(
    <> 
    <h2>TO-DO APP</h2>

    <Todoform submittedtask={addtask} ></Todoform>
    <Todolist Mylist={arraytask}  deletetodo={deletetask} edittodo={edittask}></Todolist>
    </>
  )
}

export default App