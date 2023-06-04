import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../page/home/Home';
import About from '../page/About';
import WhatToEat from '../page/whattoeat/WhatToEat';
import MainRouterOutlet from './MainRouterOutlet';

export default function MainRouter() {
    return (
        <Routes>
            <Route path="/" element={<MainRouterOutlet/>}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/whatToEat" element={<WhatToEat />} />
            </Route>
        </Routes>
    )
}
