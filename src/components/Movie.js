import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/movie.css';

import Img from './common/image/Img';

const Movie = ({ title, year, poster }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 justify-content-md-start">
                    <div className='movie card' style={{ width: '18rem', height: '30rem' }}>
                        <Img src={poster} alt='poster' className='img-thumbnail'/>
                        <div className="card-body">
                            <p className='card-text'>{title}</p>
                            <p className='card-text'>Year: {year}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Movie.propTypes = {
    title : PropTypes.string,
    year : PropTypes.number,
    poster : PropTypes.string
}

export default Movie
