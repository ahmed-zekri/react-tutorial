import PropTypes from "prop-types";
import {Button, Col} from "react-bootstrap";



const Header = ({title}) => {
    return (
        <header>
            <h1 style={style}>{title}</h1>
            <Button as={Col} variant="success" hidden={true}>how</Button>
        </header>
    );
};
//Specify default props values
Header.defaultProps = {
    title: 'Indecission'
};

//Specify prop types
Header.propTypes = {
    title: PropTypes.string.isRequired
};

const style = {
    backgroundColor: 'red',
    padding: '10px'
}
export default Header;