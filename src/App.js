import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';


function App() {

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  // GET Task from server
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks();
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

 // Fecth Task (singular)
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  // Add Task function
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    
    const data = await res.json()

    setTasks([...tasks, data])
  }

  // Delete Task function
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? 
    {...task, reminder: !data.reminder} : task
      )
    )
  }

  return (
    <Router>
    <div className="App">
      <Header showAdd={showAddTask} onAdd={() => setShowAddTask(!showAddTask) } title="Task Tracker"/>
      
      
         <Route path='/' exact render={(props) => 
         (
            <>
              {showAddTask && <AddTask onAdd={addTask} />
}
          {/* List of task */}
        {tasks.length > 0 ? (
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) 
            : (
              'No Tasks to Show'
            )}
            </>
         )} />

        <Route path='/about' component={About} />
        <Footer />
    </div>
    </Router>
  );
}

export default App;
