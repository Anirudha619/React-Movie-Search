import React from 'react';

export default function MovieCard (props) {
  
    return (
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.poster_path}`} className="card--image"
        alt ={props.title + "poster"}
        />
        <div className="card--content">
            <h3 className="card--title">
            {props.title}
            </h3>
            <p>
            <small>RELEASE DATE: {props.release_date}</small>
            </p>
            <p>
            <small>RATING: {props.vote_average} out of 10</small>
            </p>
            <p className="card--desc">
            {props.overview}
            </p>
        </div>
    </div>
    );
}