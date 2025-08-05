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
        <div
      className="relative border rounded shadow-sm overflow-hidden"
      style={{
        backgroundImage: task.image ? `url(${task.image})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      {task.image && (
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
      )}

      {/* Content */}
      <div className="relative z-10 p-4 flex flex-col md:flex-row md:items-center md:justify-between text-white">
        <div className="flex-1">
          {isEditing ? (
            <div className="flex flex-col md:flex-row gap-2 md:items-center">
              <input
                className="border p-1 text-black"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              <input
                className="border p-1 text-black"
                value={editedAssignee}
                onChange={(e) => setEditedAssignee(e.target.value)}
              />
            </div>
          ) : (
            <div>
              <p className="font-semibold text-lg">{task.title}</p>
              <p className="text-sm">{task.assignee}</p>
            </div>
          )}
        </div>

        <div className="mt-2 md:mt-0 flex gap-2">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-2 py-1 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 text-black px-2 py-1 rounded"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="bg-yellow-400 text-white px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => onDelate(task.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delate
              </button>
            </>
          )}
        </div>
      </div>
    </div>
    );
}

export default TaskItem;