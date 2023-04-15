import Navbar from './components/navbar';
import Track from './components/track';
import UserLogin from './components/user_login';
import UserDashboard from './components/user_dashboard';
import React, { createContext, useState } from 'react';

import './App.css';
import LandingPage from './components/landing_page';
export const LoginContext = createContext()
function App() {
  const [context, setContext] = useState({
    login: {
      loggedin: false,
      underlogin: false,
      username: undefined,
      password: undefined,
    }
  })
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
  const updateContextValue = (newValue) => {
    setContext(newValue)
  }
  return (
   <LoginContext.Provider value={{context: context, setContext: updateContextValue}}>
     <div className="App">
      {/* <Navbar/>
    <Track/> */}
      <LoginContext.Consumer>
        {(context, setContext) => {
          if(!(context.context.login.underlogin)) {
            return <LandingPage email={context.context.login.username} password={context.context.login.password}/>
          } else {
            if (detail.isLoginPage) return <UserLogin handleClick={(e)=>onSubmitHandle(e)}/>
          }
        }}
      </LoginContext.Consumer>
      {/* <UserSignUp/> */}
      {/* <UserDashboard/> */}
    </div>
   </LoginContext.Provider>
  );
}

export default App;
