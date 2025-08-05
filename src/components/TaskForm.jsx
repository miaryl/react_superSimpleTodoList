import React, { useState } from "react";

function TaskForm({onAddTask}){
    const [title, setTitle] = useState('');
    const [assignee, setAssignee] = useState('');
    const [image, setImage] = useState('');


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if(!file) return;

        const reader = new FileReader();
        reader.onloadend =()=>{
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
    }



    const handlleSubmit = (e) =>{
        e.preventDefault();
        if(!title.trim() || !assignee.trim()) return;

        onAddTask({ title, assignee, image});

        setTitle('');
        setAssignee('');
        setImage(null);

        e.target.reset();
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
            <input 
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="ml-5"/>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
        </form>
    );
}

export default TaskForm;