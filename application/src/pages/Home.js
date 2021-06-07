import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-wrapper">
            <h1> Home </h1>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/about"> About </NavLink>
        </div>
    );
};

export default Home;