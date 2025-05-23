import React from 'react';
import cs from "./SideBar.module.scss"
import SearchBar from "../SearchBar/SearchBar.jsx";
import Logo from "../UI/Logo/Logo.jsx";
import SideBarNav from "../SideBarNav/SideBarNav.jsx";
const SideBar = ({onSearch}) => {
    return (
        <div className={cs.sideBar}>
            <Logo/>
            <SearchBar onSearch={onSearch}/>
            <SideBarNav/>
        </div>
    );
};

export default SideBar;