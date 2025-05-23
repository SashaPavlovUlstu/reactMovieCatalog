import React, {useMemo, useState} from 'react';
import SideBar from "../components/SideBar/SideBar.jsx";
import Header from "../components/Header/Header.jsx";
import Catalog from "../components/Catalog/Catalog.jsx";
import Modal from "../components/Modal/Modal.jsx";
import GetFilmByGenre from "../hooks/GetFilmByGenre.jsx";

const Action = () => {
    const genreName = "Боевик"
    const [modal,setModal] = useState(false);
    const { movies, loading, error } = GetFilmByGenre(genreName, `${genreName.toLowerCase()}Movies`);
    const [filterItem, setFilter] = useState("");
    const setModalOpen = () => {
        setModal(true);
    }
    const setModalClose = () => {
        setModal(false);
    }
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
    return (
        <div className="App">
            <div className="app-grid-layout">
                <SideBar onSearch={handleSearch}/>
                <Header setVisible={setModalOpen}/>
                <Catalog movieData={filteredMovies} />
                {modal
                    ?
                    <Modal visible={modal} setVisible={setModal} />
                    :""
                }
            </div>
        </div>
    );
};

export default Action;