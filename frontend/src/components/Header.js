import {React} from 'react';
import { Link } from "react-router-dom";
import './Header.css';





const Header=()=>{

    return (
        <div className='outer-nav-1'>

        <h1 className='nav-company'>SENTHOOR MOTOR FINANCE</h1>

<div className='outer-nav'>
           <Link to="/home"><button className='nav'>Home</button></Link>
           <Link to="/services"><button className='nav'>Service</button></Link>
           <Link to="/customer"><button className='nav'>Customer</button></Link>
           <Link to="/blog"><button className='nav'>Blog</button></Link>
           <Link to="/login"><button className='nav'>login</button></Link>
           
        </div>
        </div>
        
    );
}



export default Header;