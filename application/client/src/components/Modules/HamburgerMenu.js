import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import NavBar from './NavBar'; 

    const HamburgerMenu = () => {
   
    //hamburger menu open and close
    const [open, setOpen] = useState(false);
    const hamburgerIcon = <GiHamburgerMenu className = 'menu-row' size='40px' color='black' onClick={() => setOpen(!open)} />
    const closeIcon = <GrClose className = 'menu-row' size='40px' color='black' onClick={() => setOpen(!open)} />
     

    return(    
        <div className="hamburger-menu">
        {open ? closeIcon : hamburgerIcon}
        {open && <NavBar/>}
        </div>
        );
        
    }

    export default HamburgerMenu;