
const Task = ({ addTask }) => {
    return (
        <div className="task">
            <h3>{addTask.text}</h3>
            <p>{addTask.day}</p>
        </div>
    )
}

export default Task
