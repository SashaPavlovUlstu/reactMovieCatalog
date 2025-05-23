import React, { useState } from 'react';
import cs from "./SearchBar.module.scss";
import Input from "../UI/Input/Input.jsx";

const SearchBar = ({onSearch}) => {
    const [value, setValue] = useState("");

    const handleInputChange = (event) => {
        setValue(event.target.value);
        onSearch(event.target.value);
    };
    return (
        <div className={cs.searchBarDiv}>
            <img src="../src/assets/icons/iconamoon_search-bold.png" alt="Поиск" className={cs.searchIcon} />
            <Input
                onChange={handleInputChange}
                value={value}
                className={cs.searchInput}
            />
        </div>
    );
};

export default SearchBar;