import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="content has-text-centered">
                    <p>
                        <strong>Copyright &copy; 2022</strong> <Link to="/about">by Zika</Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer