import React from 'react';
import './LeftMenu.css'; // Стили
import logo from '../../images/FRlogo.jpg';



function LeftMenu() {
    return (
        <div className="left-menu">
            {/* Добавление изображения logo*/}
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
                {/* Название компании */}
                <h1 className="company-name">FURNIROOM</h1>
                {/* Лозунг */}
                <p className="slogan"><em>"Smart-дизайн для вашого ідеального затишку"</em></p>
            </div>

            {/* Ссылки меню */}

            <ul>
                <li>ГОЛОВНА</li>
                <li>ПРО НАС</li>
                <li>ПРОДУКЦІЯ</li>
                <li>ЯКІСТЬ</li>
                <li>ПРОЕКТНІ РОБОТИ</li>
                <li>ПРАЙС</li>
                <li>ВІДЕО</li>
                <li>НОВИНИ / БЛОГ</li>
                <li>ВХІД / РЕЄСТРАЦІЯ</li>
                <li>ЗВ'ЯЗАТИСЯ З НАМИ</li>
            </ul>
        </div>
    );
}

export default LeftMenu;
