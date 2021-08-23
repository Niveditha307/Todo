import {Component} from "react"
import TodoItem from "./TodoItem"
import "./TodoList.css"

let count = 0 

class TodoList extends Component {

    state = {
        searchInput : "",
        TodoArray : [],
      
    }

    addTodo = (event) => {

        event.preventDefault()
        
        const {searchInput,TodoArray} = this.state 
        if(searchInput !== ""){
            count++;
            const newTodo = {
                id : count,
                Todo : searchInput,
                status : false
            }

            this.setState({
                TodoArray : [...TodoArray,newTodo],
                searchInput : ""
               
                
            })
          
        }
       
        console.log(TodoArray)
      
       
    }

    onChangeValue = (event) => {
        this.setState({searchInput : event.target.value})

    }
    

    onDeleteTodo = id => {
      const {TodoArray} = this.state 
      const deleteTodosData = TodoArray.filter(eachTodo => eachTodo.id !== id)
      this.setState({
          TodoArray:deleteTodosData
      })
    }

  

   

    


    render(){
        const {TodoArray} = this.state
        return(
            <div>
                <h1>Todo List</h1>
                <h2>What needs to be done Today</h2>
                <form onSubmit = {this.addTodo}>
                <input type = "text" onChange = {this.onChangeValue} className = "user-input"/> </form>
                <div>
             
                </div> 
                <div className = "todo-container">
                    <ul className = "todo-list-container">
                        {TodoArray.map(eachTodo => (
                           <TodoItem TodoDetails = {eachTodo} key = {eachTodo.id}
                           onDeleteTodo = {this.onDeleteTodo}
                          
                         />
                        ))}
                    </ul>

                </div>
              
            </div>
        )
    }
}

export default TodoList