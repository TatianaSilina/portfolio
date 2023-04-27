import React from "react";
import style from './Contact.module.css';
import styleContainer from "../common/styles/Container.module.css";



export const Contact = () => {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <h2 className={style.title}>Контакты</h2>
                <div className={style.formWrapper}>
                    <form className={style.form}>
                        <input/>
                        <input/>
                        <textarea/>
                    </form>
                    <button className={style.contactBtn}>Отправить</button>
                </div>


            </div>
        </div>
    );
}


