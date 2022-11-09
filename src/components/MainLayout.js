import { Outlet } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'
import { useState } from "react";


const MainLayout = () => {

    const [show, setShow] = useState(false)

    const toggle = () =>{
        setShow(!show)
    }
    
    return (
        <div style={{backgroundColor: '#151111'}} className="mainlayout">
            <Navbar toggle={toggle} show={show} />
            <div
             style={show ? {height: '80vh'} : {height: '0vh'}}
             className="menu"></div>
            <Outlet/>
            <Footer/>
        </div>
     );
}
 
export default MainLayout;