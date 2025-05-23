import React from 'react';
import cs from "./NavItem.module.scss"
import {Link} from "react-router-dom";
const NavItem = ({iconSrc,link,children}) => {
    return (
        <li className={cs.navItem}>
            {iconSrc && (
                <img
                    src={iconSrc}
                    alt="не загрузилось"
                    className={cs.navIconPng}
                />
            )}
            <Link className={cs.link} to={link}>{children}</Link>
        </li>
    );
};

export default NavItem;