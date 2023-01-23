import React from 'react';
import './App.css';
import {useState} from 'react';

function App() {
  const [toDos, setToDos] = useState([])//empty array
  const [toDo, setToDo] = useState('')//input value giving a empty  value
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Things to do! 🌝 ☕ </h2>
      </div>
      <div className="input">
        {/*Event.target- A reference to the object to which the event was originally dispatched.*/}
        {/* the input value first was todo that means '' when we type onchange happens the value will show what we have typed on the input field*/}
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." autocomplete="off" autofocus />
        {/*The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.*/}
        {/*when we click + button in setToDos in the empty aray the new input value is adding..spread operator is using bcoz it gives us an array of values and the todo value will be added to this existing array */}
        <i onClick={()=>setToDos([...toDos, {id:Date.now(), text:toDo, status: false}])}className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {/*maping the values in the array here ..value is a string*/}
        {toDos.map((obj)=>{
          return(
            <div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                  setToDos(toDos.filter(obj2=>{
                    if(obj2.id === obj.id){
                    obj2.status = e.target.checked;
                    }
                    return obj2
                  }))
                }} 
                  value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                {/* how to delete when click x*/}
                {/* onclick > call the function > setToDos > this particular id object property will go away.will be removed */ }
                <i onClick={(e)=>{setToDos(toDos.filter(obj3=>
                  
                    {return obj3.id !== obj.id}
                  ))}} className="fas fa-times"></i>
              </div>
            </div>
          )
          })
        
        }
        
        <div className="subHeading">
          <br />
          <h2>Things Done</h2>
          {toDos.map((obj)=>{
            if(obj.status){
              return (<h2>{obj.text}</h2>)
            }
            return null
          })}
        </div>
          
        
        
        

      </div>
    </div>
  );
}

export default App;