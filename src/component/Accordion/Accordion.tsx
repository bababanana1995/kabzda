import React, {useState} from "react";
type AccordionType = {
    title: string
    collapsed:boolean
}
const Accordion = (props:AccordionType) => {{
   const [collapsed, setCollapsed] = useState(false)
    const CollapsedHandler= ()=> {
        setCollapsed(prevState => !prevState)
    }
    return (
            <div onClick={CollapsedHandler}>
                <AccordionTitle title={props.title}/>
                {collapsed && <AccordionBody/>}

            </div>
        )
    }

}
type AccordionTitleType = {
    title:string
}
const AccordionTitle = (props:AccordionTitleType) => {
    return (

        <h3>{props.title}</h3>

    )
}
const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
export default Accordion
