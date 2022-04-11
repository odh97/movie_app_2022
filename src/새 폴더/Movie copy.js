import React from 'react';
// import PropTypes from 'pror-types';

function Movie_copy(id,year,title,poster,summary,genres) {
  return (
    <div>
        <img src={poster} alt={title}/>
        <div className='movie_data'>
          <h1 className='movie_title'> {title} </h1>
          <h2 className='movie_year'> {year} </h2>
          <p className='movie_year'> {summary} </p>
          {/* <ul className='movie_genres'>
            {genres.map((genre,index) => {
                        return (
                          <li key={index}>{genre}</li>
                        )
                      }
                      )
            }
          </ul> */}
          {/* <p className='movie_summary'>{summary}</p> */}
        </div>
    </div>
  )
}

// Movie.propTypes = {
//   id : PropTypes.number.isRequired,
//   year : PropTypes.number.isRequired,
//   title : PropTypes.number.isRequired,
//   summary : PropTypes.number.isRequired,
//   poster : PropTypes.number.isRequired,
// };

export default Movie_copy;