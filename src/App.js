import './index.css'
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';


function App() {

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Learning react',
      day: 'Monday',
      reminder: true,
    },
    {
      id: 2,
      text: 'Washing clothes',
      day: 'Sunday',
      reminder: false,
    },
    {
      id: 3,
      text: 'Watch serie',
      day: 'Tuesday',
      reminder: true,
    }
  ]);

  // Add Task function
  const addTask = (task) => {
    
    const id = Math.floor(Math.random() * 10000) + 1
    
    const newTask = { id, ...task } 
    setTasks([...tasks, newTask])
  }

  // Delete Task function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? 
    {...task, reminder: !task.reminder} : task
      )
    )
  }

  return (
    <div className="App">
      <Header showAdd={showAddTask} onAdd={() => setShowAddTask(!showAddTask) } title="Task Tracker"/>
      {showAddTask && <AddTask onAdd={addTask} />
}
      {/* List of task */}
     { tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) 
        : (
          'No Tasks to Show'
        )}
    </div>
  );
}

export default App;
