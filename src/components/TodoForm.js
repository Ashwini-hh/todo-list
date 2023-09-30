import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value,setvalue] = useState("")
    const [error, setError] = useState('');
    
    // const handleSubmit = e =>{
    //     e.preventDefault();
    //     // Check if the value is not empty before adding the task
    //     if (value.trim() !== '') {
    //     addTodo(value)
    //     setvalue("")
    //     }
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!value.trim()) {
          setError('Task cannot be empty');
          return;
        }
    
        addTodo(value);
      
        setvalue('');
        setError('');
      };
 
    return (
    <form classname="TodoForm" onSubmit={handleSubmit}>
        {/* <input type="text" className='todo-input' value={value}
         placeholder="What is the Task today?" onChange ={(e) => setvalue(e.target.value)}  /> */}
          <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the Task today?"
        onChange={(e) => {
          setvalue(e.target.value);
          setError('');
        }}
      />

        {/* <button type='submit' className='todo-btn'> Add Task</button> */}
        <button type="submit" className="todo-btn">
        Add Task
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  )
}
