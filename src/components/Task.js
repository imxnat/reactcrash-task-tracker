import { FaTimes } from 'react-icons/fa';

const Task = ({ taskLine, onDelete, onToggle }) => {
    return (
        <div className={`task ${taskLine.reminder ? 'reminder' : ''}`} 
             onDoubleClick={ () => onToggle(taskLine.id)}>
           
           <h3>{taskLine.text} 
                <FaTimes style={{ color: 'red', cursor: 'pointer'}}
                onClick={() => onDelete(taskLine.id)}
                /> 
            
            </h3>

            <p>{taskLine.day}</p>
        </div>
    )
}

export default Task
