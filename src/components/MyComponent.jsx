import React, { useState } from 'react'
import './MyComponent.css'
import Title from './Title';

export default function MyComponent() {
  const cor = 10;
  const redTitle = true;

  const [nome] = useState("Miguel");
  return (
    <div>
        <h1>Css de Compomente</h1>
        <p>Parágrafo do Compomente</p>
        <p style={{color:'green', padding:'10px', borderTop:'2px solid red'}}>Parágrafo estilizado com css inline</p>
        <p style={cor < 10 ? {color:'yellow'} : {color:'gray'} }>CSS Dinâmico</p>
        <p className='my-component-paragrafo'>Este Também é Parágrafo do Compomente estilizado com className </p>
  
        <h2 style={nome ===  "Miguel" ? {color:'blue', backgroundColor:'red'} : null }>
          Teste nome, {nome}
        </h2>

        {/*Texto com classe dinamica*/}
        <h2 className={redTitle ? 'red-title' : 'title' }>Texto com classe dinamica</h2>

         {/*Css module*/}
         <Title/>
    </div>
  )
}
