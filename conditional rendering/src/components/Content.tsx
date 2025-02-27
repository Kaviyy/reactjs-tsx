import React from "react";
import styled from "styled-components";
import CounterApp from "./CounterApp";
    let headingStyle={
      backgroundColor:"blue",
      color:"white",
      boxShadow:"10px 10px 5px black"
    }
    const Button = styled.button`
      background-color: blue;
      color: white;
      width: 100px;
      height: 50px;
      border: none;
      cursor: pointer;
    `;

    let NewButton = styled(Button)`
    background-color : red;
    box-shadow : 10px 10px 5px black;

    `;
    let user="mubee"
    function printSomething(e){
      console.log(e);
      console.log(e.target.innerText);
      console.log("hello world");
      user = "muruga"
      console.log(user);
    }
    function printSomethingone(event){
      console.log(event.target.innerText);
      console.log("Hello world");
      user = "mubeena"
      console.log(user);
    }
    
    const Content = () => {
      return (
        <main>
          <h1 style={headingStyle}>Main Content - {user}</h1>
          <p style={{backgroundColor:"pink"}}>hey</p>

          <Button onClick={printSomething}>Click me</Button>
          
          <NewButton onClick={(e)=>{printSomethingone(e)}}>Duplicate</NewButton>
          <CounterApp/>
        </main>
      );
    };
    
    export default Content;
    