import React, {useState} from "react";

function TaskItem({ task, onDelate, onUpdate}){
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);
    const [editedAssignee, setEditedAssignee] = useState(task.assignee);

    const handleSave =()=>{
        if(!editedTitle.trim() || !editedAssignee.trim()) return;

        onUpdate({...task, title: editedTitle, assignee: editedAssignee});
        setIsEditing(false);
    };

    return(
        <div className="border p-4 rounded shadow-sm flex flex-col md:flex-row md:items-center md:justify-between">
            {isEditing ?(
                <div className="flex flex-col md:flex-row gap-2 md:items-center">
                    <input
                    className="border p-1"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                     />
                     <input 
                     className="border p-1"
                     value={editedAssignee}
                     onChange={(e)=> setEditedAssignee(e.target.value)}
                     />
                </div>
            ) : (
                <div>
                    <p className="font-medium">{task.title}</p>
                    <p className="text-sm text-gray-600">{task.assignee}</p>
                </div>
            )}
            <div className="mt-2 md:mt-0 flex gap-2">
                {isEditing ? (
                    <>
                      <button onClick={handleSave} className="bg-green-500 text-white px-2 py-1 rounded">Save</button>
                      <button onClick={()=> setIsEditing(false)}  className="bg-gray-300 px-2 py-1 rounded">Cancel</button>
                    </>
                ) :(
                    <>
                      <button onClick={()=> setIsEditing(true)} className="bg-yellow-400 text-white px-2 py-1 rounded">Edit</button>
                      <button onClick={()=> onDelate(task.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delate</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default TaskItem;