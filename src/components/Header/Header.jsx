import React, {useState} from 'react';
import PageTitle from "../PageTitle/PageTitle.jsx";
import cs from "./Header.module.scss";
import Container from "../Container/Container.jsx";
const Header = ({setVisible}) => {
    return (
        <Container>
            <div className={cs.header}>
                <PageTitle/>
                <button onClick={setVisible} className={cs.button}>Связаться</button>
            </div>
        </Container>

    );
};

export default Header;