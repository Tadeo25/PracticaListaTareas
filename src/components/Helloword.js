import React, {useState} from 'react';

export default function HelloWord(props) {
    const [count, setCount] = useState("") 
  return (

    <>
    <h1>
        Lista {props.dato} 
    </h1>
    <h2>
        {count}
    </h2>
    <button className='btn btn-info' onClick={() => setCount("Bienvenido/a!")}>
        <b>Click me</b>
      </button>
    </>
  );
}




