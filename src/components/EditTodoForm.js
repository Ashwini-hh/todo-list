import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value,setvalue] = useState(task.task)
    const [error, setError] = useState('');

    
    // const handleSubmit = e =>{
    //     e.preventDefault();
    //     editTodo(value, task.id)
    //     setvalue("")
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!value.trim()) {
          setError('Task cannot be empty');
          return;
        }
    
        editTodo(value, task.id);
        setvalue('');
        setError('');
      };
 
    return (
    <form classname="TodoForm" onSubmit={handleSubmit}>
        {/* <input type="text" className='todo-input' value={value}
         placeholder="Update Task" onChange ={(e) => setvalue(e.target.value)} />
        <button type='submit' className='todo-btn'> Update Task</button> */}

<input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update Task"
        onChange={(e) => {
          setvalue(e.target.value);
          setError('');
        }}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
      {error && <p className="error">{error}</p>}


    </form>
  )
}
