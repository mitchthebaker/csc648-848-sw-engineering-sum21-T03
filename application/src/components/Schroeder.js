import React from 'react';

const Schroeder = () => {
    return (
        <div className="team-member">
            <h2> Michael Schroeder </h2>
            <img
                src={`/uploads/michael.png`}
                className="team-member-image"
                alt="Failed to load."
            />
            <p> Hi there! Outside of programming, I love to spend most of my time diving headfirst into my hobbies and pop culture addictions.
             I enjoy restoring and repairing old retro equipment, such as old video game consoles or older CRT's (tube TVs).
           I have a major passion for all things Star Wars as well, and I am currently building a screen accurate Stormtrooper armor set.  </p>
        </div>
    );
};

export default Schroeder;