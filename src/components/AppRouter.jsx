import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home.jsx";
import Fantastic from "../pages/Fantastic.jsx";
import Comedy from "../pages/Comedy.jsx";
import Action from "../pages/Action.jsx";
const AppRouter = () => {
    return (
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route exact path="/Fantastic" element={<Fantastic/>} />
            <Route exact path="/Comedy" element={<Comedy/>} />
            <Route path="/Action" element={<Action />} />
            <Route path="/*" element={<Navigate to="/Home" replace />} />
        </Routes>
    );
};

export default AppRouter;