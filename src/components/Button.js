import PropTypes from 'react'

const Button = ({ text, onClick}) => {
    return  <button 
        onClick={onClick}
        className='btn'
    >
    {text}
    </button>
}

// to define a default value for the props
Button.defaultProps = {
    text: 'button'
}
// to define types of props isRequired another op
Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}
export default Button
