import React from "react";
import Rating from "../Rating/Rating";
type AccordionType = {
    title: string
    collapsed:boolean
}
const Accordion = (props:AccordionType) => {{
        return (
            <div>
                <AccordionTitle title={props.title}/>
                {!props.collapsed && <AccordionBody/>}

            </div>
        )
    }

}
type AccordionTitleType = {
    title:string
}
const AccordionTitle = (props:AccordionTitleType) => {
    debugger
    console.log("Accordion title")
    return (

        <h3>{props.title}</h3>

    )
}
const AccordionBody = () => {
    console.log("body")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
export default Accordion
