import React, {useContext, useEffect} from 'react'
import {StateContext} from './contexts'
import {useResource} from 'react-request-hook'

export default function Todo({title, description, dateCreated, complete, dateCompleted, user, id, todoId}){

  const {dispatch} = useContext(StateContext)

  const [todo, deleteTodo] = useResource((id) => ({
    url:`/todos/${encodeURI(id)}`,
    method:'delete'
  }))

  function handleDelete(){
    deleteTodo(id)
    dispatch({type:"DELETE_TODO", index:todoId})
  }

  const [updatedTodo, toggleTodo] = useResource(({complete}, id) => ({
    url:`/todos/${encodeURI(id)}`,
    method:'patch',
    data:{complete:!complete, dateCompleted:completeDateGetter(!complete)}
  }))

  function handleToggle(){
    toggleTodo({complete}, id)
    dispatch({type:"TOGGLE_TODO", index:todoId, completeCheck:!complete, completedDateVal:completeDateGetter(!complete)})
  }

  return(
    <div>

        <h3>{title}</h3>

        <div>{description}</div>
        <br />
        <div><i>Date Created: {dateCreated}</i></div>
        <br />
        <div><i>Complete: <input type="checkbox" checked={complete} onClick={e=> handleToggle()} /></i></div>
        <br />
        <div><i>Date Completed: {dateCompleted}</i></div>
        <br />
        <i>Added by <b>{user}</b></i><br /><br />

        <button onClick={e =>handleDelete()}>Delete</button>

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
