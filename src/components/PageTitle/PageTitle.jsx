import React from 'react';
import cs from "./PageTitle.module.scss"
import {useLocation} from "react-router-dom";
const PageTitle = () => {
    const location = useLocation();
    const locale = {
        Home:"Главная",
        Fantastic:"Фантастика",
        Action:"Боевик",
        Comedy:"Комедия"
    }
    console.log(locale[location.pathname.slice(1)])
    return (
        <h1 className={cs.pageTitle}>
            {locale[location.pathname.slice(1)]}
        </h1>
    );
};

export default PageTitle;