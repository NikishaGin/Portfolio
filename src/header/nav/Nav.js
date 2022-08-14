import React from 'react';
import style from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="my-portfolio/src/header/nav/Nav">Главная</a>
            <a href="my-portfolio/src/header/nav/Nav">Скиллы</a>
            <a href="my-portfolio/src/header/nav/Nav">Проекты</a>
            <a href="my-portfolio/src/header/nav/Nav">Контакты</a>
        </div>
    );
};

