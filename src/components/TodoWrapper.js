import React, {useState, useEffect} from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';

uuidv4();

const getLocalStorage = () => {
    let todos = localStorage.getItem("todos");
    if(todos) {
        return (todos = JSON.parse(localStorage.getItem("todos")))
    } else {
        return [];
    }

};

export const TodoWrapper = () => {
    const [todos, setTodos] = useState(getLocalStorage());

    
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    

    const addTodo = todo => {
        setTodos([...todos,{id: uuidv4(), task:todo,
        completed: false, isEditing: false}])
        console.log(todos)
    }

    const toggleComplete = id =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))

    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ?
             {...todo, task, isEditing: !todo.isEditing} : todo))
    }

  return (
    <div className='TodoWrapper'>
        <video autoPlay loop muted className='video-background'>
        <source src='./bg2.mp4' type='video/mp4' /> {/* Replace with the actual path to your background video */}
        {/* You can add additional source elements for different video formats */}
      </video>
        <h1>Get Things Done !!</h1>
        <TodoForm addTodo ={addTodo} />
        {todos.map((todo, index) => (
           todo.isEditing ? (
                <EditTodoForm  editTodo={editTask} task={todo}/>
            ) : (
                <Todo task={todo} key={index} 
                toggleComplete ={toggleComplete} deleteTodo = {deleteTodo} 
                editTodo={editTodo}/>
            )

          
        ))}
            
    </div>
  )
}
