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
            <h1> Home </h1>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/about"> About </NavLink>

            <p> {!data ? "Loading..." : data} </p>
        </div>
    );
};

export default Home;