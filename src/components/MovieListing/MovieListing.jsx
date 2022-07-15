import React from 'react';
import './MovieListing.scss'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';

const MovieListing = () => {
    const movies = useSelector(state => state.movies.movies)


    return (
        <div className='movie-wrapper'>
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    {movies.Response === "True" ? (
                        movies.Search.map((movie, index) => (
                            <MovieCard key={index} data={movie} />
                        )
                        )
                    ) : (
                        <div className='movies-error'>
                            {movies.Error}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieListing;