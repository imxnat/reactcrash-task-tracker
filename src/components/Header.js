import { useLocation } from "react-router"
import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {

    // for deleting the bottom when in about page
  const location = useLocation()


    return (
        <header className="header">
            <h1>{title}</h1>
            { location.pathname === '/' && (<Button 
                text={showAdd ? 'Close' : 'Add'} 
                color={showAdd ? 'red' : 'green'} 
                onClick={onAdd} 
            />)}
        </header>
    )
}

export default Header
