import  React, {useState} from 'react';
import Accordion from "./component/Accordion/Accordion";
import Rating from "./component/Rating/Rating";
import {OnOff} from "./component/on-off/OnOff";
import './App.css'


export type StudentsProps = {
    id: number
    name: string
    age: number
}
function App() {

    return (
        <div className='App'>
            <Accordion title={'Menu'} collapsed={false}/>
            <Accordion title={'Users'} collapsed={false}/>
            <Rating value={3}/>
            <Rating value={2}/>
            <Rating value={1}/>
            <Rating value={4}/>
            <OnOff choose={false}/>

        </div>
    );
}

export default App;
