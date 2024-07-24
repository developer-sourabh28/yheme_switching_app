import logo from './logo.svg';
import './App.css';
import {useEffect, useRef, useState } from 'react';

const arr = [];

class Auth{
  constructor(){
    this.isLoggedIn = false;
  }
  login(){

  }
  
  logout(){

  }

  signup(){
    
  }
}

function App() {

  const [count, setCount] = useState(10);
  const user = useRef({ name: "shlok", age: 24});

  const btnRef = useRef(null);

  const authRef = useRef(new Auth());


  //console.log(obj);
  //arr.push(obj);

  /*if(arr.length == 2){
    console.log(arr[0], arr[1]);
    console.log(arr[0] === arr[1]);
  }*/
const incAge = () => {
  user.current.age++;
  console.log(user);
}

const onClickLoginBtn = () => {
  new Auth().login();
}

const onClickSignup = () => {
  new Auth().signup();
}

useEffect(()=> {
  console.log(btnRef);
}, []);

  return (
    <div className="App">
      <p>Name: <b>{user.current.name}</b> Age:<i>{user.current.age} </i> </p>
    <h1>count: {count}</h1>
    <button onClick={incAge}>Increment</button>
    <button onClick={() => setCount(count+1)}>Increment</button>    
    </div>
  );
}

export default App;
