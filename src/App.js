import Navbar from './components/navbar';
import Track from './components/track';
import UserLogin from './components/user_login';
import UserDashboard from './components/user_dashboard';
import React from 'react';

import './App.css';

function App() {
  const [ detail , setDetails ] = React.useState({
    username : null , 
    password : null , 
    isLoginPage : true , 
    isDashBoard : false , 
   
  })
  function onSubmitHandle(e){
    e.preventDefault()
    console.log("hello");;
  }
  return (
    <div className="App">
      {/* <Navbar/>
    <Track/> */}
      {detail.isLoginPage && <UserLogin handleClick={(e)=>onSubmitHandle(e)}/>}
      {/* <UserSignUp/> */}
      {/* <UserDashboard/> */}
    </div>
  );
}

export default App;
