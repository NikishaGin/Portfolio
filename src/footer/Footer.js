import styleContainer from "../common/styles/Container.module.css";
import style from "./Footer.module.css";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={style.title}>Никита Владиирович Седов</h3>
                <div className={style.footerIcon}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <span>© 2022 все права защищены</span>
            </div>
        </div>
    )
}