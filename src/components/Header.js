import Button from "./Button"

const Header = ({ title }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text="Add" />
        </header>
    )
}

export default Header
