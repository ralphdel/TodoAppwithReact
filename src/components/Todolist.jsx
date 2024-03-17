

const Todolist = ({ Mylist, deletetask, edittask }) => {
  return (
    <>
      <div>
        <div>
          <h4>Task</h4>
        </div>
        <div>
          <ol type="1">
            {Mylist.map((Eachtask) => {
              return (
                <>
                  <div >
                    <li key={Eachtask.id} >{Eachtask.taskname} </li>
                    <button>Edit Task</button>
                    <button>Delete Task</button>
                  </div>
                </>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Todolist;
