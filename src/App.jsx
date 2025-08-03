import { useEffect, useState } from 'react'
import HeroSection from './components/HeroSection';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(()=> {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks(prev => [...prev, {...newTask, id: crypto.randomUUID()}]);
  };

  const delateTask = (id) => {
    setTasks(prev => [...prev,filter(task => task.id !== id)]);
  };

  const updateTask = (updatedTask) => {
    setTasks(prev => prev.map(task => task.id === updatedTask.id ? updatedTask : task));
  };
  

  return (
    <div className='max-w-2xl mx-auto p-4'>
      <HeroSection />
      <TaskForm onAddTask={addTask}/>
      <TaskList tasks={tasks} onDelateTask={delateTask} onUpdateTask={updateTask}/>
    </div>
  );
}

export default App
