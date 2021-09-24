import React from 'react'

export default function Todo({title, description, dateCreated, complete, dateCompleted}){

  let tickBox;
  if(complete){
    tickBox = <input type="checkbox" id="complete-status" name="complete-status" checked/>
    }else{
    tickBox = <input type="checkbox" id="complete-status" name="complete-status"/>
    }
  return(
    <div>
        <h3>{title}</h3>
        <div>{description}</div>
        <br />
        <div><i>Date Created: {dateCreated}</i></div>
        <br />
        <div><i>Complete: {tickBox}</i></div>
        <br />
        <div><i>Date Completed: {dateCompleted}</i></div>
    </div>
  )
}
