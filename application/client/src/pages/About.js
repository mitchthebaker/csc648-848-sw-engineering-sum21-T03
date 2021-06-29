import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-wrapper">
            <section className="navigation">
                <h1> About </h1>
                <div className="navigation-links">
                    <NavLink className="nav-link" to="/"> Home </NavLink>
                    <NavLink className="nav-link" to="/profile"> Profile </NavLink>
                    <NavLink className="nav-link" to="/login"> Login </NavLink>
                </div>
            </section>
            
            <h2> Frontend </h2>
            <section className="frontend-links">
                <NavLink className="about-navlink" to="/ceusebio"> Charmaine Eusebio </NavLink>
                <NavLink className="about-navlink" to="/rechevarria"> Rowena Echevarria </NavLink>
                <NavLink className="about-navlink" to="/krinap"> Krina Patel </NavLink>
            </section>

            <h2> Backend </h2>
            <section className="backend-links">
                <NavLink className="about-navlink" to="/michael"> Michael Schroeder </NavLink>
                <NavLink className="about-navlink" to="/kenneth"> Kenneth Chuson </NavLink>
                <NavLink className="about-navlink" to="/walker"> Jamie Walker </NavLink>
            </section>

            <h2> Fullstack </h2>
            <section className="fullstack-links">
                <NavLink className="about-navlink" to="/mbaker"> Mitchel Baker </NavLink>
            </section>
        </div>
    );
};

export default About;