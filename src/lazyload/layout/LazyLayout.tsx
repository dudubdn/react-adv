import React from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

export const LazyLayout = () => {
    return (
        <div>
            <h1>LazyLayout Page</h1>
            {/* Rutas Hijas */}
            <ul>
                <li>
                    <NavLink to="lazy1">Layzy 1</NavLink>
                </li>
                <li>
                    <NavLink to="lazy2">Layzy 2</NavLink>
                </li>
                <li>
                    <NavLink to="lazy3">Layzy 3</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path="lazy1" element={<LazyPage1 />} />
                <Route path="lazy2" element={<LazyPage2 />} />
                <Route path="lazy3" element={<LazyPage3 />} />
                <Route path="*" element={<Navigate to="lazy1" replace />} />
            </Routes>
        </div>
    )
}


export default LazyLayout