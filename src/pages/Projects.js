import '../css/projects.css'
import {FaChevronDown,  FaChevronUp, FaGithub} from 'react-icons/fa'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const Projects = () => {

    const [toggle, setToggle] = useState(false)

    const toggleAcc = () =>{
        setToggle(!toggle)
    }

    return ( 
        <div class="projects">
            <div class="p-box">
                <div className="p-box-menu">
                    <h3>INDEED CLONE</h3>
                    <h3 onClick={toggleAcc}>{toggle ? <FaChevronUp/> : <FaChevronDown/>}</h3>
                </div>
                <div style={toggle ? {height:'200px'}: {height:'0'}} className="p-box-content">
                    <p>full stack</p>
                    <p>REACT || NODE || MONGODB</p>
                    <Link to='/'>LIVE DEMO</Link>
                    <Link to='/'><FaGithub/></Link>
                </div>
            </div>
            <div class="p-box">
                <div className="p-box-menu">
                    <h3>INDEED CLONE</h3>
                    <h3 onClick={toggleAcc}>{toggle ? <FaChevronUp/> : <FaChevronDown/>}</h3>
                </div>
                <div style={toggle ? {height:'200px'}: {height:'0'}} className="p-box-content">
                    <p>full stack</p>
                    <p>REACT || NODE || MONGODB</p>
                    <Link to='/'>LIVE DEMO</Link>
                    <Link to='/'><FaGithub/></Link>
                </div>
            </div>
            <div class="p-box">
                <div className="p-box-menu">
                    <h3>INDEED CLONE</h3>
                    <h3 onClick={toggleAcc}>{toggle ? <FaChevronUp/> : <FaChevronDown/>}</h3>
                </div>
                <div style={toggle ? {height:'200px'}: {height:'0'}} className="p-box-content">
                    <p>full stack</p>
                    <p>REACT || NODE || MONGODB</p>
                    <Link to='/'>LIVE DEMO</Link>
                    <Link to='/'><FaGithub/></Link>
                </div>
            </div>
            <div class="p-box">
                <div className="p-box-menu">
                    <h3>INDEED CLONE</h3>
                    <h3 onClick={toggleAcc}>{toggle ? <FaChevronUp/> : <FaChevronDown/>}</h3>
                </div>
                <div style={toggle ? {height:'200px'}: {height:'0'}} className="p-box-content">
                    <p>full stack</p>
                    <p>REACT || NODE || MONGODB</p>
                    <Link to='/'>LIVE DEMO</Link>
                    <Link to='/'><FaGithub/></Link>
                </div>
            </div>
    </div>
     );
}
 
export default Projects;