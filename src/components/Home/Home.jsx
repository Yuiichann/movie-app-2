import React, { useState } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import './Home.scss';

const Home = () => {
    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    );
};

export default Home;    