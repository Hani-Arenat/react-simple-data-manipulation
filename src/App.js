import React, { useState } from 'react';
import './App.css';
import Person from './components/Person/Person'
 import ToDo from './components/todo/todo'
/*import List from './components/list/list' */

function App() {
  /*           Data             */

  const [count,setCount] = useState(0)
  const [persons,setPersons] = useState([{name:'hani',age:27},{name:'saad',age:22},{name:'max',age:31}])
  const [showHideFlag,setShowHideFlag] = useState(true)
  const [counterStyle,setCounterStyle] = useState({color:"red"})

/* ---------------------------- */


  /*           methods             */

  const increase = ()=>{
    let randomColor = "#" + (Math.random() * 1000000).toFixed(0)
    const newStyle = {color:randomColor}
    
    setCounterStyle(newStyle)
    setCount(count + 1)
  }

  const decrease = ()=>{
    let randomColor = "#" + (Math.random() * 1000000).toFixed(0)
    const newStyle = {color:randomColor}
    
    setCounterStyle(newStyle)
    setCount(count - 1)
  }

  const togglePersons = ()=>{
    setShowHideFlag(!showHideFlag)
  }

  const changePersonName = (val,index)=>{
    const myPerson = {...persons[index]};
    myPerson.name = val;

    const myPersons = [...persons]
    myPersons[index] = myPerson

    setPersons(myPersons)
  }

  const deleteItem = (index)=>{
    const allPersons = [...persons]
    allPersons.splice(index,1);
    setPersons(allPersons)
  }

  const addNewPerson = (nameArg,ageArg)=>{
    
    let myPerson = {
            "name":nameArg,
            "age":ageArg
          };

    const myPersons = [...persons]
    myPersons.unshift(myPerson)

    setPersons(myPersons)
  }
/* ---------------------------- */

  /*           manipulations / logic / checks             */

  let allPersons = null;
  if(showHideFlag){
    allPersons = persons.map((p,index) => 
    <Person 
      name={p.name} 
      age={p.age} 
      key={index}
      change={(val)=>changePersonName(val,index)}
      deleteItem={() =>deleteItem(index)}
      />
    )
  }
   
/* ---------------------------- */
  
  return (
    <div className="App">
      <h1>Simple React App With Multiple Properties</h1>
     
      <p className="counter-class" style={counterStyle}>{count}</p>
      <button className="btn-class" onClick={increase}>Increase Counter</button>
      <button className="btn-class" onClick={decrease}>Decrease Counter</button>

      <button className="block btn-class" onClick={togglePersons}>show / hide Persons</button>
      <ToDo sendPersonData={(a,b)=> addNewPerson(a,b)} />
      
      <div className="persons-count">Persons Count: {persons.length}</div>
      <div>{allPersons}</div>
    </div>
  );
}

export default App;
