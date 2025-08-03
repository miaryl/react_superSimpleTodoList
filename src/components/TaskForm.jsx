import React, {use, useState } from "react";

function TaskForm({onAddTask}){
    const [title, setTitle] = useState('');
    const [assignee, setAssignee] = useState('');

    const handlleSubmit = (e) =>{
        e.preventDefault();
        if(!title.trim() || !assignee.trim()) return;

        onAddTask({ title, assignee});

        setTitle('');
        setAssignee('');
    };

    return(
        <form onSubmit={handlleSubmit} className="mb-6">
            <label htmlFor="task">Task: </label>
            <input 
            className="border p-2 mr-2 w-1/2"
            placeholder="write your task here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="assignee">Assignee: </label>
            <input 
            className="border p-2 mr-2 w-1/3"
            placeholder="who will do the task?"
            value={assignee}
            onChange={(e)=> setAssignee(e.target.value)}
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
        </form>
    );
}

export default TaskForm;