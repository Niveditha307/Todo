const TodoItem = props => {
    const {TodoDetails,onDeleteTodo} = props
    const {id,Todo,status} = TodoDetails

    const onDeleteTodoItem = () => {
        onDeleteTodo(id)
    }
   
    return(
        <li className = "todo-list-item">
            <p style = {{textDecoration : status ? "line-through" : " "}}>{Todo}</p>
            <div>
          
            <button type = "button" className = "delete-button" onClick = {onDeleteTodoItem}>Delete</button></div>
        </li>
     )

}

export default TodoItem