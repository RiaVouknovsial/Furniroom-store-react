import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Импортируем компоненты маршрутизации
import Layout from './components/Layout/Layout';  // Импортируем Layout
import LeftMenu from './components/LeftMenu/LeftMenu';  // Импортируем LeftMenu компонент
import Main from './components/Main/Main';  // Импортируем Main компонент
import About from './components/About/About';  // Импортируем About компонент
import Products from './components/Products/Products';  // Импортируем Products компонент
import Quality from './components/Quality/Quality';  // Импортируем Quality компонент
import Projects from './components/Projects/Projects';  // Импортируем Project компонент
import Pricing from './components/Pricing/Pricing';  // Импортируем Pricing компонент
import Videos from './components/Videos/Videos';  // Импортируем Videos компонент
import Blog from './components/Blog/Blog';  // Импортируем Blog компонент
import Contacts from './components/Contacts/Contacts';  // Импортируем Contacts компонент
import Authorization from './components/Authorization/Authorization';  // Импортируем Authorization компонент


function App() {
    return (
      <Layout>  {/* Панель Layout будет отображаться на всех страницах */}
        <div className="layout">
          {/* Левое меню */}
          <div className="left-menu-container">
            <LeftMenu />  {/* Добавляем компонент LeftMenu */}
          </div>
  
          {/* Контентная часть */}
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Main />} />  {/* Главная страница */}
              <Route path="/about" element={<About />} />  {/* Страница "О нас" */}
              <Route path="/products" element={<Products />} />
              <Route path="/quality" element={<Quality />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contacts />} />
              <Route path="/auth" element={<Authorization />} />
              <Route path="*" element={<div>Страница не найдена</div>} />
            </Routes>
          </div>
        </div>
      </Layout>
    );
  }

export default App;
