import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';


 const Nav = ({history}) => {

    const[nav,setNav]=useState(false)
    const Nav = useRef(null)
    const navLinks = useRef(null)
    
    return (
       <nav ref = {Nav}  className={`nav ${nav ? 'active' : ''}`} >
           <div className="logo"><Link to =''>Ecommers</Link></div>
            <ul className="navLinks" ref= {navLinks}>
                <NavLink to="/" exact  activeClassName='activlink' ><li>Home</li></NavLink>
            </ul>
       </nav>
    )                   
}
export default Nav                      