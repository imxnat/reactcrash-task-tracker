import './index.css'
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';


function App() {

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

  return (
    <div className="App">
      <Header title="Task Tracker"/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
