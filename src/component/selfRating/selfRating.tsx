import React, {useState} from "react";

export const SelfRating = () => {
    const [value, setValue] = useState(0)
    const addRatinghandler = (value: number) => {
        setValue(value)
    }
    const starComponentStyle = {
        display: 'flex',
    }
    return (
        <div style={starComponentStyle}>
            <Star addRating={() => addRatinghandler(1)} selected={value > 0}/>
            <Star addRating={() => addRatinghandler(2)} selected={value > 1}/>
            <Star addRating={() => addRatinghandler(3)} selected={value > 2}/>
            <Star addRating={() => addRatinghandler(4)} selected={value > 3}/>
            <Star addRating={() => addRatinghandler(5)} selected={value > 4}/>
        </div>)

}
type StarPropsType = {
    addRating: () => void
    selected: boolean
}
const Star = (props: StarPropsType) => {
const onclickButtonHandler=()=>{
    props.addRating()
}
return <div style={{cursor:"pointer",margin:'5px'}} onClick={onclickButtonHandler}>{props.selected? '"star"' : 'star' }</div>

    // if (props.selected) {
    //     return <div><b> star </b></div>
    // } else {
    //     return <div> star </div>
    // }
}
export default SelfRating
