import React from 'react'

export default function Todo({title, description, dateCreated, complete, dateCompleted, user, todoId, dispatchTodos}){

  return(
    <div>

        <h3>{title}</h3>

        <div>{description}</div>
        <br />
        <div><i>Date Created: {dateCreated}</i></div>
        <br />
        <div><i>Complete: <input type="checkbox" checked={complete} onClick={e=> dispatchTodos({type:"TOGGLE_TODO", index:todoId, completeCheck:!complete, completedDateVal:completeDateGetter(!complete)})} /></i></div>
        <br />
        <div><i>Date Completed: {dateCompleted}</i></div>
        <br />
        <i>Added by <b>{user}</b></i><br /><br />

        <button onClick={e => dispatchTodos({type:"DELETE_TODO", index:todoId})}>Delete</button>

   </div>
 )
}

function completeDateGetter(complete){
    let currentTime ="";
    if(complete){
      const ts = Date.now();

      const date_ob = new Date(ts);
      const date = date_ob.getDate();
      const month = date_ob.getMonth() + 1;
      const year = date_ob.getFullYear();

      currentTime = `${year}-${month}-${date}`;
  }
    return currentTime;
}
