import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LeftMenu from '../LeftMenu/LeftMenu'; // Путь к компоненту LeftMenu
import Main from '../Main/Main'; // Путь к карусели
import About from '../About/About';
import Products from '../Products/Products';
import Quality from '../Quality/Quality';
import Projects from '../Projects/Projects';
import Pricing from '../Pricing/Pricing';
import Videos from '../Videos/Videos';
import Blog from '../Blog/Blog';
import Contacts from '../Contacts/Contacts';
import Authorization from '../Authorization/Authorization'; // Путь к авторизации
import './Layout.css'; // Стили для Layout

function Layout() {
    return (
        <Router>
            <div className="layout">
                {/* Левое меню */}
                <div className="left-menu-container">
                    <LeftMenu />
                    <ul>
                        <li><Link to="/">ГОЛОВНА</Link></li>
                        <li><Link to="/about">ПРО НАС</Link></li>
                        <li><Link to="/products">ПРОДУКЦІЯ</Link></li>
                        <li><Link to="/quality">ЯКІСТЬ</Link></li>
                        <li><Link to="/projects">ПРОЕКТНІ РОБОТИ</Link></li>
                        <li><Link to="/pricing">ПРАЙС</Link></li>
                        <li><Link to="/videos">ВІДЕО</Link></li>
                        <li><Link to="/blog">НОВИНИ / БЛОГ</Link></li>
                        <li><Link to="/auth">ВХІД / РЕЄСТРАЦІЯ</Link></li>
                        <li><Link to="/contacts">ЗВ'ЯЗАТИСЯ З НАМИ</Link></li>
                    </ul>
                </div>

                {/* Контентная часть */}
                <div className="content-container">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/quality" element={<Quality />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/videos" element={<Videos />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/auth" element={<Authorization />} />
                        <Route path="*" element={<div>Страница не найдена</div>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default Layout;
