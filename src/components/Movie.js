// rfce 함수형 에포넌트
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Movie.css';

function Movie(id,year,title,summary,poster,genres) {
  return (
    <div className='movie'>
      <Link to={'/movie_detail'} state={{year,title,summary,poster,genres}}>
        <img src={poster} alt={title} title={title} />
        <div className='movie_data'>
          <h3 className='movie_title' style={{backgroundColor :'#eee'}}> {title} </h3>
          <h4 className='movie_year'> {year} </h4>
          <ul className='movie_genres'>
            {genres.map((genre,index) => {
                                            return (
                                              <li key={index} className="movie_genre">{genre}</li>
                                            )
                                          }
                      )
            }
          </ul>
          <p className='movie_summary'>{summary.slice(0,180)} ...</p>
        </div>
      </Link>
    </div>
  )
}

Movie.propTypes = {
  id : PropTypes.number.isRequired,//number는 숫자
  year : PropTypes.number.isRequired,
  title : PropTypes.string.isRequired,//string는 문자열
  summary : PropTypes.string.isRequired,
  poster : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired//arrayOf는 배열 
};

export default Movie;