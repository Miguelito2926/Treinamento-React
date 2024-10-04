import './App.css'
import Donald from './assets/donald.png'
import CarDetails from './components/CarDetails'
import ConditionalRender from './components/ConditionalRender'
import LisRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'

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
      {/*Props */}
      <ShowUserName name="Ed"/>

      {/*Destrucruring*/}
      <CarDetails model="FIAT" km={80000} color="Prata"/>
    </div>
  )
}

export default App
