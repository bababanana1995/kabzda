import React, {useState} from 'react';
import Accordion from "./component/Accordion/Accordion";

import {OnOff} from "./component/on-off/OnOff";
import './App.css'
import SelfRating from "./component/selfRating/selfRating";


export type StudentsProps = {
    id: number
    name: string
    age: number
}

function App() {
// const onOffHandler=(event:React.MouseEvent<HTMLButtonElement>) => {
// event.
// }
// const [bool, setBool] = useState(true)
//     const onOffHandler=() => {
// setBool(prevState => !prevState)
//
// }
    return (
        <div className='App'>
            <Accordion title={'Menu'} collapsed={false}/>
            <Accordion title={'Users'} collapsed={false}/>
            <SelfRating/>
            <OnOff/>
            {/*<button onClick={onOffHandler}>жмяк</button>*/}

        </div>
    );
}

export default App;

