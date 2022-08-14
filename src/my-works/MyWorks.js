import {Works} from "./works/Works";
import style from './MyWorks.module.css'
import styleContainer from "../common/styles/Container.module.css";


export const MyWorks = () => {
        return (
            <div className={style.MyWorksBlock}>
                <div className={`${styleContainer.container} ${style.MyWorksContainer}`}>
                    <h2 className={style.title}>Мои работы</h2>
                    <div className={style.Works}>
                        <Works image={"Картинка"} title={"Название проекта"} description={"Краткое описание"}/>
                        <Works image={"Картинка"} title={"Название проекта"} description={"Краткое описание"}/>
                        <Works image={"Картинка"} title={"Название проекта"} description={"Краткое описание"}/>
                    </div>
                </div>
            </div>
        )
}