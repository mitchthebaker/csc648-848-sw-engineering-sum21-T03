import React from 'react';
import { NavLink } from 'react-router-dom';

const Echevarria = () => {
    return (
        <div className="team-member">
            <section className="navigation">
                <div className="navigation-links">
                    <NavLink className="nav-link" to="/"> Home </NavLink>
                    <NavLink className="nav-link" to="/about"> About </NavLink>
                </div>
            </section>
            <h2> Rowena Echevarria </h2>
            <img
                src={`/uploads/rechevarria.jpeg`}
                className="team-member-image"
                alt="Failed to load."
            />
            <p> Description: Hello I am Rowena. I like to travel and run marathons. I am hoping to excel in this course. </p>
        </div>
    );
};

export default Echevarria;