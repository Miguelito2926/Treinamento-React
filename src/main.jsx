import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyComponent from './components/MyComponent.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*Usando Css global*/}
    <App />

     {/*Usando Css de componente*/}
    <MyComponent/>
  </StrictMode>,
)
