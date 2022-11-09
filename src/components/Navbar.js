import '../css/layout.css'
import {Link} from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({toggle, show}) => {
    return ( 
        <div class="nav">
            <div className="links">
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/projects'>PROJECTS</Link>
                <Link to='/skills'>SKILLS</Link>
            </div>
            <h1 onClick={toggle}>{show ? <FaTimes/> : <FaBars/>}</h1>
        </div>
     );
}
 
export default Navbar;