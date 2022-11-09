import '../css/skills.css'


const Skills = () => {
    return ( 
        <div class="skills">
            <div class='skill-container'>
            <div class="skills1">
                <p style={{marginBottom: '20px',fontSize: '25px',fontWeight: 'bold',color: 'grey'}}>SOFT SKILLS</p>
                <ul style={{fontSize: '15px'}}>
                    <li>ENERGETIC</li>
                    <li>QUICK LEARNER</li>
                    <li>COMMUNICATION</li>
                    <li>TYPING</li>
                    <li>EATING</li>
                </ul>
            </div>
            <div class="skills2">
                <p style={{marginBottom: '20px',fontSize: '30px',fontWeight: 'bold',color: 'grey'}}>SKILLS</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>VUE</li>
                    <li>REACT</li>
                    <li>NODE</li>
                    <li>SQL</li>
                    <li>GIT</li>
                </ul>
            </div>
            </div>
        </div>
     );
}
 
export default Skills;