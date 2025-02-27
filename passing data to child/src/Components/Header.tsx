import React, { useContext } from 'react'
import { UserContext } from '../App'

const Header = () => {
  //let userValue = useContext(UserContext) -destructuring
  let {user:{uName}} = useContext(UserContext)
  return (
    <>
     <header>
            <h1>todo list </h1>
            <p style={{backgroundColor:"black",width:"30px",textAlign:"center",
            borderRadius:"50%",
            }}>{uName.slice(0,1)}</p>
    </header>
    
    </>
    
    
  )
}

export default Header