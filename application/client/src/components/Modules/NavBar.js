import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavigationIcons from './NavigationIcons';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

const NavBar = () => {

    //hamburger menu open and close
    const [open, setOpen] = useState(false);
    const hamburgerIcon = <GiHamburgerMenu className = 'menu-row' size='40px' color='black' onClick={() => setOpen(!open)} />
    const closeIcon = <GrClose className = 'menu-row' size='40px' color='black' onClick={() => setOpen(!open)} />

    return (
        <div className="navbar">   
            {open ? closeIcon : hamburgerIcon}
            {open && <NavigationIcons/>}
        </div>
    );
};

export default NavBar;
