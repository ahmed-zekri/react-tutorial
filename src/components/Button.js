import PropTypes from "prop-types";

const Button = ({name, color, onClick}) => (
    <button onClick={onClick} color={color}>
        {name}
    </button>
);

Button.defaultProps = {
    name: 'Button',
    color: '#000',
    onClick: () => {
        alert('Clicked!')
    }
};

Button.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
