import React from 'react'
import './MyComponent.css'

export default function MyComponent() {
  return (
    <div>
        <h1>Css de Compomente</h1>
        <p>Parágrafo do Compomente</p>
        <p style={{color:'green', padding:'10px', borderTop:'2px solid red'}}>Parágrafo estilizado com css inline</p>
        <p className='my-component-paragrafo'>Este Também é Parágrafo do Compomente estilizado com className </p>
    </div>
  )
}
