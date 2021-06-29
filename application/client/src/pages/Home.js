import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        axios.get('/api')
            .then((res) => {
                setData(res.data.message);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    return (
        <div className="home-wrapper">
            <section className="navigation">
                <h1> Home </h1>
                <div className="navigation-links">
                    <NavLink className="nav-link" to="/"> Home </NavLink>
                    <NavLink className="nav-link" to="/about"> About </NavLink>
                    <NavLink className="nav-link" to="/profile"> Profile </NavLink>
                </div>
            </section>

            <p> {!data ? "Loading..." : data} </p>
        </div>
    );
};

export default Home;