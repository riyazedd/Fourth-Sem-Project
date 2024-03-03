import {Link} from "react-router-dom";

function Header(){
    return (
        <header>
            <Link to="/">Home</Link><br />
            <Link to="/about">About</Link><br />
            <Link to="/add-student">Add Student</Link>
        </header>
    );
}

export default Header;