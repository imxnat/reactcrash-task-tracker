import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} 
                taskLine={task} 
                onDelete={onDelete}
                onToggle={onToggle}  
                />
            ))}
        </>
    )
}

export default Tasks
