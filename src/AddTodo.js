import React from 'react'

export default function AddTodo({user}){

  let complete = false;

  return (
    <form onSubmit={e => e.preventDefault()}>
        <div>
            <label htmlFor="add-title">Title:</label>
            <input type="text" name="add-title" id="add-titile" required/>
        </div>

        <div>
              <label htmlFor="add-description">Description:</label>
              <textarea name="add-description" id="add-description"/>
        </div>

        <div>
              Date Created: {dateGetter()}
        </div>

        <div>
              <label htmlFor="complete-status">Complete:</label>
              {checkBoxGetter(complete)}
        </div>

        <div>
              Date Completed:
        </div>

      <input type="submit" value="Add" />

    </form>

  )
}

export function checkBoxGetter(complete){
  let tickBox;
  if(complete){
    tickBox = <input type="checkbox" id="complete-status" name="complete-status" checked/>
    }else{
    tickBox = <input type="checkbox" id="complete-status" name="complete-status"/>
  }
  return tickBox;
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

// function dateSetter({completedDate}){
//     const date_ob = new Date({completedDate});
//     const date = date_ob.getDate();
//     const month = date_ob.getMonth() + 1;
//     const year = date_ob.getFullYear();
//
//     const completedTime = `${year}-${month}-${date}`;
//     return completedTime;
//   }
