import AddTodo from './AddTodo'
import TodoList from './TodoList'
import UserBar from './user/UserBar'
import React, {useState, useReducer} from 'react'

function App() {
  //dummy data to fake the created todo items in the list as initial todo list
  const initialTodos = [
    {
      title:"Pick up the Grocery Order",
      description:"This is the first thing I need to do --- I need to pick up my grocery order in Whole Foods nearby.",
      dateCreated:"2021-9-30",
      complete:false,
      dateCompleted:"",
      user:'Lily'
    },
    {
      title:"Purchase the concert ticket",
      description:"This is the second thing I need to do --- I need to purchase a ticket as the gift for my newphew",
      dateCreated:"2021-9-22",
      complete:false,
      dateCompleted:"",
      user:'Brian'
    },
    {
      title:"Picking up the Grocery Order",
      description:"This is the third thing I need to do --- I am going to pick up my grocery order in WholeFoods nearby.",
      dateCreated:"2021-9-28",
      complete:false,
      dateCompleted:"",
      user:'Kira'
    },
    {
      title:"Picking up the Grocery Order",
      description:"This is the fourth thing I need to do --- I am going to pick up my grocery order in WholeFoods nearby.",
      dateCreated:"2021-9-18",
      complete:false,
      dateCompleted:"",
      user:'Xuxu'
    }

  ]

  function userReducer(state, action){
    switch(action.type){
      case 'LOGIN':
      case 'REGISTER':
        return action.username;
      case 'LOGOUT':
        return '';
      default:
        return state;
    }
  }

  function todoReducer(state, action){
    switch(action.type){
      case 'CREATE_TODO':
        const newTodo = {
          title:action.title,
          description:action.description,
          dateCreated:action.dateCreated,
          complete:action.complete,
          dateCompleted:action.dateCompleted,
          user:action.user
        }
        return [newTodo, ...state]
      case 'TOGGLE_TODO':
        const index = action.index;
        const targetTodo = state.slice(index,index+1)[0]
        const toggledTodo = {...targetTodo, complete:action.completeCheck, dateCompleted:action.completedDateVal}
        return [...state.slice(0, index), toggledTodo, ...state.slice(index+1)]
      case 'DELETE_TODO':
        const i = action.index;
        return [...state.slice(0, i), ...state.slice(i+1)]
      default:
        return state;
    }
  }

  const[user, dispatchUser] = useReducer(userReducer, '')
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos)

  return (
    <div>
        <UserBar user={user} dispatchUser={dispatchUser} />

        <br></br><hr></hr><br></br>
        {user && <AddTodo user={user} dispatchTodos={dispatchTodos} />}

        <br></br><br></br>
        <TodoList todos={todos} dispatchTodos={dispatchTodos} />
    </div>
  )
}

export default App;
