import React from "react";
import style from './Skills.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'Таким образом, сложившаяся структура организации способствует подготовке и реализации'}/>
                    <Skill title={'CSS'} description={' сложившаяся структура организации способствует подготовке и реализации'}/>
                    <Skill title={'REACT'} description={' структура организации способствует подготовке и реализации'}/>
                </div>
            </div>
        </div>
    );
}


