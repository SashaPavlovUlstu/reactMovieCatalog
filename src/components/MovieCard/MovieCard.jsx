import React from 'react';
import cs from "./MovieCard.module.scss"
const MovieCard = ({movie}) => {
    if (!movie) {
        return (
            <h1>xdfgdfg</h1>
        )
    }
    return (
        <div className={cs.card}>
            <img className={cs.image} src={movie.posterUrlPreview} alt=""/>
            <h1 className={cs.title}>{movie.nameRu}</h1>
            <h6 className={cs.supTitle}>{movie.year}</h6>
        </div>
    );
};

export default MovieCard;