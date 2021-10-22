import AddTodo from './AddTodo'
import TodoList from './TodoList'
import UserBar from './user/UserBar'
import appReducer from './reducers'
import {StateContext} from './contexts'
import React, {useState, useReducer, useEffect} from 'react'
import {useResource} from 'react-request-hook'

function App() {

  const [todos, getTodos] = useResource(() => ({
    url:'/todos',
    method:'get'
  }))

  const [state, dispatch] = useReducer(appReducer, {user:'', todos:[]})

  useEffect(getTodos, [])

  useEffect(()=>{
    if(todos && todos.data){
      dispatch({type:'FETCH_TODOS', todos:todos.data.reverse()})
    }
  }, [todos])


  const {user} = state

  return (
    <div>
      <StateContext.Provider value={{state:state, dispatch:dispatch}}>
        <UserBar />

        <br></br><hr></hr><br></br>
        {user && <AddTodo />}

        <br></br><br></br>
        <TodoList />
      </StateContext.Provider>
    </div>
  )
}

export default App;

