import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-wrapper">
            <h1> About </h1>
            <NavLink to="/mbaker"> Mitchel Baker </NavLink>
            <NavLink to="/kenneth"> Kenneth Chuson </NavLink>
        </div>
    );
};

export default About;