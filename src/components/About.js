import { Link } from "react-router-dom"

const About = () => {
    return (
        <div>
            <h4 style={{marginBottom: '1rem'}} >Version 1.0.0</h4>
            
            <ul style={{marginLeft: '1.5rem'}}>
                <li>Create new Task</li>
                <li>Delete Task</li>
                <li>Set reminder to Tasks</li>
                <li>Fetching data from fake server</li>
                <li>Hooks: useState (for updating data)</li>
                <li>Hooks: useEffect (for Getting data)</li>
                <li>Hooks: useLocation (for showing especific things based on the route)</li>
                <li>Create forms and some validations</li>
                <li>Routing between components with react-router-dom</li>
            </ul>
            <Link className="link" to="/" >Go back</Link>
        </div>
    )
}

export default About
