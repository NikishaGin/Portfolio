import styleContainer from "../common/styles/Container.module.css";
import style from './Contacts.module.css'


export const Contacts = () => {
    return (
        <div className={style.ContactsBlock}>
            <div className={`${styleContainer.container} ${style.ContactsContainer}`}>
                <h2 className={style.title}>Контакты</h2>
                    <form className={style.Contacts}>
                        <input/>
                        <input/>
                        <textarea/>
                    </form>
                    <button>Отправить</button>
            </div>
        </div>
    )
}