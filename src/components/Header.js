import PropTypes from "prop-types";
import Button from "./Button";


const Header = ({title}) => {
    return (
        <header>
            <h1 style={style}>{title}</h1>
            <Button name={"how"} color={"red"} onClick={()=>alert('how')}/>
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