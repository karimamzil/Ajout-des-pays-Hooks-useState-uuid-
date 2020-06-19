import React ,{useState}from 'react'
import uuid  from 'react-uuid'
import AddTodoForm from './AddTodoForm'

const Todo = () => {
const[todos,setTodos]=useState([
  {id:1,todo:'Maroc'},
  {id:2,todo:'Algérie'},
  {id:3,todo:'Tunisie'}])
const [warning,setWarning]=useState(false)
  const myTodos=todos.map(todo=>{return(<li className="list-group-item" key={todo.key}>{todo.todo}</li>)})    
const addNewTodo = (newTodo)=>{
  if(newTodo !==''){
  setTodos([...todos,{id:uuid(),todo:newTodo}])} else {setWarning(true);}
}
 const warningMessage=warning && <div class="alert alert-warning" role="alert">
insérer un pays!!
</div>
return (
        <div>
          {warningMessage}
        <h1 className="text-center">{todos.length} Pays</h1>  
        <ul className="list-group">{myTodos}</ul>
        <AddTodoForm addNewTodo={addNewTodo}/>
        </div>
    )
    
}

export default Todo
