import './App.css';
import Logo from "./components/UI/Logo/Logo.jsx";
import Header from "./components/Header/Header.jsx";
import "./styles/reset.module.scss";
import SideBar from "./components/SideBar/SideBar.jsx";
import Catalog from "./components/Catalog/Catalog.jsx";
import MovieService from "./API/MovieService.jsx";
import {useEffect, useMemo, useState} from "react";
import {useFetching} from "./hooks/UseFetching.jsx";
import { getUniqueNumber } from './utils/functions.js';
import Modal from "./components/Modal/Modal.jsx";
import AppRouter from "./components/AppRouter.jsx";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App;