import React,{useState,useRef} from 'react'
import './todo.css'

const Todo = (props)=>{
    
    const [name,setName] = useState('');
    const [age,setAge] = useState('');

    const nameRef = useRef();
    const ageRef = useRef();

    const handleData = ()=>{
        if(name.length > 0 && age.length > 0){
        console.log(name,age)
            props.sendPersonData(name,age)
            setName('');
            setAge('');
            nameRef.current.value= ''
            ageRef.current.value= ''
        }
    }



    return(
        <div>
            <input className="custom-input-class" ref={nameRef} type="text" placeholder="Person Name" onChange={(event)=> setName(event.target.value)} />
            <input className="custom-input-class ml-5" ref={ageRef} type="number" min="0" placeholder="Person Age" onChange={(event)=> setAge(event.target.value)} />
            <button disabled={name.length > 0 && age.length > 0 ? false:true} className={name.length > 0 && age.length > 0 ? 'btn-class':'btn-class btn-disabled'} onClick={handleData}>Add Person</button>
        </div>
    )
}

export default Todo;