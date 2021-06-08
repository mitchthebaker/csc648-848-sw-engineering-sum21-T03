import React from 'react';

const Walker = () => {
    return (
        <div className="team-member">
            <h2> Jamie Walker </h2>
            <img
                src={`/uploads/jwalker.jpg`}
                className="team-member-image"
                alt="Failed to load."
            />
            <p> Description: Hi my name is Jamie Walker and I am a senior at San Francisco State
            <br> and expect to graduate in fall.
            <br> I plan to look for work work in the game development or cyber secruit areas.
            <br> When I am not working on school work I love spending time with my family,
            <br> playing video games, or painting models.
             </p>

        </div>
    );
};

export default Walker;
