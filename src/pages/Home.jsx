import React, {useEffect, useMemo, useState} from 'react';
import {getUniqueNumber} from "../utils/functions.js";
import MovieService from "../API/MovieService.jsx";
import SideBar from "../components/SideBar/SideBar.jsx";
import Header from "../components/Header/Header.jsx";
import Catalog from "../components/Catalog/Catalog.jsx";
import Modal from "../components/Modal/Modal.jsx";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loadingMultiple, setLoadingMultiple] = useState(false);
    const [errorMultiple, setErrorMultiple] = useState(null);
    const [filterItem, setFilter] = useState("");
    const [modal,setModal] = useState(false);
    const setModalOpen = () => {
        setModal(true);
    }
    const setModalClose = () => {
        setModal(false);
    }
    const numberOfMoviesToFetch = 8;
    const memoizedFetchMovies = useMemo(() => {
        const fetch = async () => {
            setLoadingMultiple(true);
            setErrorMultiple(null);
            try {
                const movieIds = Array.from({ length: numberOfMoviesToFetch }, () => getUniqueNumber());
                const moviePromises = movieIds.map(movieId => MovieService.fetchMovies(movieId));
                const responses = await Promise.all(moviePromises);
                setMovies(responses);
                localStorage.setItem("movies", JSON.stringify(responses));
            } catch (error) {
                setErrorMultiple(error);
            } finally {
                setLoadingMultiple(false);
            }
        };
        return fetch;
    }, [numberOfMoviesToFetch]);

    useEffect(() => {
        const storedMovies = localStorage.getItem("movies");
        if (storedMovies) {
            setMovies(JSON.parse(storedMovies));
        } else {
            memoizedFetchMovies();
        }
    }, [memoizedFetchMovies]);

    const handleSearch = (term) => {
        setFilter(term);
    };

    const filteredMovies = useMemo(() => {
        if (!filterItem) {
            return movies;
        }
        return movies.filter(movie =>{
                let year = String(movie?.year);
                return movie?.nameRu?.toLowerCase().includes(filterItem.toLowerCase()) || year.includes(filterItem);
            }
        );
    }, [movies, filterItem]);
    console.log(filterItem)
    console.log("Filtered" +  JSON.stringify(filteredMovies, null, 2))
    //console.log(movies);
    return (
        <div className="App">
            <div className="app-grid-layout">
                <SideBar onSearch={handleSearch}/>
                <Header setVisible={setModalOpen}/>
                <Catalog movieData={filteredMovies} loading={loadingMultiple} error={errorMultiple}/>
                {modal
                    ?
                    <Modal visible={modal} setVisible={setModal} />
                    :""
                }
            </div>
        </div>
    );
};

export default Home;