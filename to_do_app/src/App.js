import React from 'react';
import './App.css';
import {useState} from 'react';

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        {/*Event.target- A reference to the object to which the event was originally dispatched.*/}
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        {/*The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.*/}
        <i onClick={()=>setToDos([...toDos, toDo])}className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((value)=>{
          return(
            <div className="todo">
              <div className="left">
                <input type="checkbox" name="" id="" />
                <p>{value}</p>
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>
          )
        })
        
        }
      </div>
    </div>
  );
}

export default App;