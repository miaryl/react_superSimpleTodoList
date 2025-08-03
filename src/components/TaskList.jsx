import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelateTask, onUpdateTask}){
    return(
        <div className="space-y-4">
            {tasks.map(task => (
                <TaskItem 
                key={task.id}
                task={task}
                onDelate={onDelateTask}
                onUpdate={onUpdateTask}
                />
            ))}
        </div>
    );
}

export default TaskList;