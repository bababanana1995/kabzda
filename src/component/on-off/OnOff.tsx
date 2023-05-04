import React from "react";
import s from './Choose.module.css'


type ONOFFTYPE = {
    choose: boolean
}
export const OnOff = (props: ONOFFTYPE) => {
    return (
        <div className={s.box}>
            {props.choose ? <Reds/> : <Greens/>}
        </div>
    )
}


const Greens = () => {
    return (
        <div className={s.box1}>
            <div className={s.green}></div>
            <div className={s.white}></div>
            <div className={s.green_circle}></div>
        </div>
    )
}
const Reds = () => {
    return (
        <div className={s.box2}>
            <div className={s.white}></div>
            <div className={s.red}></div>
            <div className={s.red_circle}></div>
        </div>
    )
}
