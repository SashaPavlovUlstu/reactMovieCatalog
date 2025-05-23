import React from 'react';
import NavItem from "../NavItem/NavItem.jsx";

const SideBarNav = ({link}) => {
    return (
        <ul className="sideBarNav">
            <NavItem link="/Home" iconSrc={"../src/assets/icons/octicon_home-16.png"}>Главная</NavItem>
            <NavItem link="/Fantastic" iconSrc={"../src/assets/icons/SVG.png"}>Фантастика</NavItem>
            <NavItem link="/Comedy" iconSrc={"../src/assets/icons/icon-park-outline_movie.png"}>Комедия</NavItem>
            <NavItem link="/Action" iconSrc={"../src/assets/icons/iconoir_tv.png"}>Боевик</NavItem>
        </ul>
    );
};

export default SideBarNav;