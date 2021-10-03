
import React, {useState} from 'react'

export default function AddTodo({user, dispatchTodos}){

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [dateCreated] = useState(dateGetter())

  const [complete] = useState(false)
  const [dateCompleted] = useState('')

  function handleTitle(evt){setTitle(evt.target.value)}
  function handleDescription(evt){setDescription(evt.target.value)}

  return (
    <form onSubmit={e => {e.preventDefault(); dispatchTodos({type:"CREATE_TODO", title, description, dateCreated, complete, dateCompleted, user})}}>
        <div>User: <b>{user}</b></div>
        <div>
            <label htmlFor="add-title">Title:</label>
            <input type="text" value={title} onChange={handleTitle} name="add-title" id="add-titile" required/>
        </div>

        <div>
              <label htmlFor="add-description">Description:</label>
              <textarea name="add-description" value={description} onChange={handleDescription} id="add-description"/>
        </div>

        <div>
            Date Created: {dateCreated}
        </div>

        <div>
              <label htmlFor="complete-status">Complete:</label>
              <input type="checkbox" checked={complete} id="complete-status" name="complete-status" />
        </div>

        <div>
            Date Completed:{dateCompleted}

        </div>

      <input type="submit" value="Add" disabled={title.length === 0}/>

    </form>

  )
}


function dateGetter(){
  const ts = Date.now();

  const date_ob = new Date(ts);
  const date = date_ob.getDate();
  const month = date_ob.getMonth() + 1;
  const year = date_ob.getFullYear();

  const currentTime = `${year}-${month}-${date}`;
  return currentTime;
}
