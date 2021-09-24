import Login from './Login'
import Logout from './Logout'
import Registration from './Registration'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
//import UserBar from './UserBar'

function App() {
  //dummy data to fake the created todo items in the list
  const todos = [
    {
      title:"Pick up the Grocery Order",
      description:"This is the first thing I need to do --- I need to pick up my grocery order in Whole Foods nearby.",
      dateCreated:"2021-9-30",
      complete:false,
      dateCompleted:''
    },
    {
      title:"Purchase the concert ticket",
      description:"This is the second thing I need to do --- I need to purchase a ticket as the gift for my newphew",
      dateCreated:"2021-9-22",
      complete:true,
      dateCompleted:"2021-9-22"
    },
    {
      title:"Picking up the Grocery Order",
      description:"This is the third thing I need to do --- I am going to pick up my grocery order in WholeFoods nearby.",
      dateCreated:"2021-9-28",
      complete:false,
      dateCompleted:''
    },
    {
      title:"Picking up the Grocery Order",
      description:"This is the fourth thing I need to do --- I am going to pick up my grocery order in WholeFoods nearby.",
      dateCreated:"2021-9-18",
      complete:true,
      dateCompleted:"2021-9-18"
    }

  ]
  return (
    <div>
        <h1> User Bar: </h1>
        <Login />
        <Registration />
        <Logout />


        <br></br><br></br>
        <hr></hr>
        <h1> Add New Todo: </h1>
        <AddTodo />

        <br></br><br></br>
        <hr></hr>
        <h1>Created Todo List: </h1>
        <TodoList todos={todos} />
    </div>
  )
}

export default App;
