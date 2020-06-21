import React ,{useState,useRef} from 'react'
import './Person.css'
const Person = (props)=>{

    const inpRef = useRef();

    const handleChange = (event)=>{
        
        props.change(event.target.value)
        
        /* setTimeout(() => {
        inpRef.current.value = ''
        }, 1000); */
    }


    return(
        <div className="person-box">
            <p>Hi I'm {props.name} , {props.age} Years Old.</p>
            {/* <input ref={inpRef} value={props.name} type="text" onChange={handleChange}/> */}
            <p className="deleteItem" onClick={props.deleteItem}>delete</p>
            
        </div>
    )
}

export default Person;