import Todoitems from "./Todoitems";

const Todolist = ({ Mylist, deletetodo, edittodo }) => {


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
                  <Todoitems
                  taskname={Eachtask.taskname}
                  id={Eachtask.id}
                  key={Eachtask.id}
                  deletetask={deletetodo}
                  
                  />
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
