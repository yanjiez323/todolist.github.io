import React from "react";
import {useState} from "react";
import './App.css';
import TodoForm from "./Components/TodoForm.js";
import TodoList from "./Components/TodoList.js";



function App() {
  const[todos, setTodos] = useState([])
 
  function addTodo(todo) {
     setTodos([todo, ...todos]);
   }
   function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }
   function removeTodo(id) {
    setTodos(todos.filter((item) => item.id !== id));
         
      }

      
    
 
  return (
    <div className="App">
      <header className="App-header">
        <p>
        React Todo
        </p>
        <TodoForm addTodo={addTodo}/>
       <TodoList 
       todos={todos} 
       removeTodo={removeTodo}
       toggleComplete={toggleComplete} />
      </header>
    </div>
    
  );
}


export default App;
