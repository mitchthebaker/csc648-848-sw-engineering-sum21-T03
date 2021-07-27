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
            <NavigationIcons page={props.page} open={open} setOpen={setOpen} />
        </div>
    );
};

export default NavBar;
