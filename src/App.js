import './App.css'
import Donald from './assets/donald.png'
import ConditionalRender from './components/ConditionalRender'
import LisRender from './components/ListRender'
import ManageData from './components/ManageData'

function App () {
  return (
    <div className='App'>
      <h1>Bem-vindo! Fundamentos 2 intermediário</h1>   

      {/*Imagem em public */}
      <div>
        <img src='botafogo.png' alt='Escudo do Fogão' />
      </div>

      {/*Imagem em asset */}
      <div>
        <img src={Donald} alt='Pato' />
      </div>
      <ManageData/>
      <LisRender/>   
      <ConditionalRender/>   
    </div>
  )
}

export default App
