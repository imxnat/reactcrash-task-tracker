const Button = ({ color, text, onClick}) => {
    return  <button 
        onClick={onClick}
        className='btn'
        style={{backgroundColor: color}}
    >
    {text}
    </button>
}

// to define a default value for the props
Button.defaultProps = {
    text: 'button'
}
// to define types of props isRequired another op
// Button.propTypes = {
//     text: PropTypes.string,
//     onClick: PropTypes.function
// }
export default Button
