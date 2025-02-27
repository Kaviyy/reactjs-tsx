import {useState} from 'react'

const TextField = () => {
    const[text,setText]=useState('hello')
    function handleClick(e){
        setText(e.target.value);
    }
  return (
    <>
    <input value={text} onChange={handleClick}/>
    <p>You typed: {text}</p>
      <button onClick={() => setText('hello')}>
        Reset
      </button>
    </>
  )
}

export default TextField