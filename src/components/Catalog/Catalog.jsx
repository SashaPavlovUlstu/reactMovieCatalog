import React from 'react';
import Container from "../Container/Container.jsx";
import MovieCard from "../MovieCard/MovieCard.jsx";
import cs from ".//Catalog.module.scss";
const Catalog = ({ movieData, loading, error }) => {
    return (
        <Container>
            <div className={cs.catalogGrid}>
                {movieData.map((movie,index)=>
                 <MovieCard movie={movie} key={index}/>
            )
                }
            </div>
        </Container>
    );
};

export default Catalog;