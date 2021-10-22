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
          user:action.user,
          id:action.id
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
    case 'FETCH_TODOS':
      return action.todos;
    default:
      return state;
  }
}

export default function appReducer (state, action){
  return {
    user:userReducer(state.user, action),
    todos:todoReducer(state.todos, action)
  }
}
