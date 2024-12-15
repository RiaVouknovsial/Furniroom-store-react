import React from 'react';
import LeftMenu from '../LeftMenu/LeftMenu'; // Путь к компоненту LeftMenu
import CarouselBackground from '../CarouselBackground/CarouselBackground'; // Путь к карусели
/*import DynamicContent from '../DynamicContent/DynamicContent'; // Путь к динамическому контенту*/
import './Layout.css'; // Стили для Layout

function Layout() {
    return (
        <div className="layout">
            <div className="left-menu-container">
                <LeftMenu />
            </div>
            <div className="carousel-container">
                <CarouselBackground />
            </div>
        </div>
    );
}

export default Layout;
