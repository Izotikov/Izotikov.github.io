import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./home/Home";
import BeerPage from "./beerPage/BeerPage";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/*'} element={<Navigate to='/home' replace/>}/>
                <Route path={'/home/:id'} element={<BeerPage/>}/>
            </Routes>
        </div>
    );
};

export default AppRouter;