import '../css/home.css'
import About from  './About'
import Skills from  './Skills'
import Projects from  './Projects'

const Home = () => {
    return ( 
        <>
        <div className="main">
        <p className='name'>MARCO<br></br>
            RAMCHARAN</p>
        <p className="box">DEVELOPER  |  DESIGNER  |  CREATIVE</p>
        </div>
        <About/>
        <Projects/>
        <Skills/>
        </>
     );
}
 
export default Home;