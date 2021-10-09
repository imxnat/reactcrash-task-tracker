import React, { useState } from 'react'

const AddTask = ( {onAdd} ) => {

    const [text, setText] = useState('');
    const [day , setDay] = useState('');
    const [reminder, setReminder] = useState(false);
    
    // to add a new task
    const onSubmit = (e) => {
        //to not open a new page
        e.preventDefault()

        // for validating input data
        if(!text) {
            alert('Please add a task')
            return
        }

        // Add this
        onAdd({ text, day, reminder })

        // Clear inputs fields
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label for="task">Task</label>
                <input
                    id="task" 
                    type='text' 
                    placeholder='Add Task' 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label for="date">Day</label>
                <input
                    id="date" 
                    type='text' 
                    placeholder='Add Day' 
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    />
            </div>

            <div className="form-control form-control-check">
                <label for="reminder">Set Reminder</label>
                <input 
                    id="reminder"
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                    />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask
