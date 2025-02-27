// App.js
import React, { createContext, useState } from "react"; 


import './App.css';
import './index.css';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
export let UserContext = createContext();
function App() {
  let [user,setUser]=useState({uName:"kavi",age:20,email:"k@gmail.com"})
  
  //console.log(UserContext)
  
  return (
    <UserContext.Provider value={{user}}>
       <div className='App'>
    <Header  />
    <Content />
    <Footer  />
    </div>

    </UserContext.Provider>
   
    
    
  );
}

export default App;
