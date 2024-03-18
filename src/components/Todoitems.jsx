

const Todoitems = ({ taskname,id, deletetask}) => {
  return (
    <>
      <div>
        <li> {taskname} </li>
        <button>Edit Task</button>
        <button onClick={()=>deletetask(id)}>Delete Task</button>
      </div>
    </>
  );
};

export default Todoitems;
