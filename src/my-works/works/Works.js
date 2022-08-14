import style from './Works.module.css'


export const Works = (props) => {
    return (
        <div className={style.works}>
            <div className={style.img}>
                <img/>
                <button>Посмотреть</button>
            </div>
            <div className={style.title}>
                {props.title}
            </div>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    )
}