import React, {useEffect, useState} from 'react';
import {getUniqueNumber} from "../utils/functions.js";
import MovieService from "../API/MovieService.jsx";

const GetFilmByGenre = (genreName, cacheKey) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            setError(null);

            try {
                const cacheKey = `${genreName.toLowerCase()}Movies`;
                const cachedMovies = localStorage.getItem(cacheKey);
                if (cachedMovies) {
                    try {
                        const parsedMovies = JSON.parse(cachedMovies);
                        if (Array.isArray(parsedMovies) && parsedMovies.length > 0) {
                            setMovies(parsedMovies);
                            setLoading(false);
                            return;
                        }
                    } catch (e) {
                        console.warn("Ошибка парсинга localStorage:", e);
                    }
                }

                const movieIds = Array.from({ length: 8 }, () => getUniqueNumber()).filter(Boolean);
                const promises = movieIds.map(async id => {
                    try {
                        return await MovieService.fetchMovies(id);
                    } catch (e) {
                        console.error(`Ошибка при загрузке фильма ID=${id}`, e);
                        return null;
                    }
                });
                const allMoviesRaw = await Promise.all(promises);
                const allMovies = allMoviesRaw.filter(Boolean);

                const filtered = allMovies.filter(movie =>
                    movie.genres?.some(g => g.genre.trim().toLowerCase() === genreName.trim().toLowerCase())
                );

                setMovies(filtered);
                localStorage.setItem(cacheKey, JSON.stringify(filtered));
            } catch (e) {
                setError("Ошибка при загрузке фильмов");
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [genreName]);
    return { movies, loading, error };
};

export default GetFilmByGenre;