import React, {useState} from "react";
import s from './Choose.module.css'



export const OnOff = () => {
let [switcher, setSwitcher] = useState(false)
    const boxStyleComponent = {
        display: 'flex',
        width: '500px',
        marginTop: '10px'
    }
    debugger
    const onStyleComponent = {

        width: '200px',
        height: '100px',
        border: '1px solid black',
        backgroundColor: switcher ? 'green' : 'white',
    }

    const offStyleComponent = {
        width: '200px',
        height: '100px',
        border: '1px solid black',
        backgroundColor:switcher  ? 'white' : 'red',
        margin: '0 10px'
    }
    const indicatorStyleComponent = {
        width: '50px',
        height: '50px',
        borderRadius: '50px',
        backgroundColor: switcher ? 'green' : 'red',
        margin: '20px 0  10px 0',

    }
    // const [count, setCount] = useState(0)
    // const counterHandler = (value:number)=>{
    // setCount(count+value)
    // }
    return (
        <div style={boxStyleComponent} >
            <div style={onStyleComponent} onClick={()=>{setSwitcher(true)}}></div>
            <div style={offStyleComponent} onClick={()=>{setSwitcher(false)}} ></div>
            <div style={indicatorStyleComponent}></div>
            {/*<button onClick={()=>counterHandler(5)}>click</button>*/}
            {/*<div>{count}</div>*/}
        </div>
    )
}



