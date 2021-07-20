import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import NavigationIcons from './NavigationIcons';
import { GrClose } from 'react-icons/gr';

const NavBar = (props) => {

    //hamburger menu open and close
    const [open, setOpen] = useState(false);

    return (
        <div className="navbar">   
            <Hamburger className="hamburger-react" toggled={open} toggle={setOpen}/>
            {open && <NavigationIcons page={props.page} />}
        </div>
    );
};

export default NavBar;
