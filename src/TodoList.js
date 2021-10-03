import React from 'react'
import Todo from './Todo'

export default function TodoList({todos = [], dispatchTodos}){
  return(
    <div>
      {todos.map((t, i) => <Todo {...t} key={'Todo-' + i} todoId={i} dispatchTodos={dispatchTodos} />)}
    </div>
  )
}
