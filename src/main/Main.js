import React from 'react';
import style from './Main.module.css'
import styleContainer from '.././common/styles/Container.module.css'


export const Main = () => {
    return (
        <div className={style.main}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi guys</span>
                    <h1>i am Nikita</h1>
                    <p>Frontend-developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};