import React ,{ useState}from 'react'

const AddTodoForm = ({addNewTodo}) => {
    const [addTodo,setAddTodo]=useState('')
    const handleTodo=(e)=>{e.preventDefault();
        addNewTodo(addTodo);
    }
    return (
        <form className="mt-4" onSubmit={handleTodo}>
            <div className="card card-body">
            <div className="form-group">
            <label>Ajouter Autre pays</label>
            <input onChange={(e)=>setAddTodo(e.target.value)} value={addTodo} className="form-control" type="text"/>
            <input type="submit" className="btn btn-success"/>
            </div>  
            </div>
           
        </form>
    )
}

export default AddTodoForm
