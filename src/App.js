
import './App.css'
import Donald from './assets/donald.png'
import CarDetails from './components/CarDetails'
import ConditionalRender from './components/ConditionalRender'
import LisRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'
import Fragments from './components/Fragments'
import Container from './components/Container'

function App () {
  const cars = [
    { id: 1, model: 'Fiat', color: 'Amarelo', km: 0, newCar: true },
    { id: 2, model: 'Ford', color: 'Azul', km: 0, newCar: true },
    { id: 3, model: 'VW', color: 'Vermelho', km: 1000, newCar: false },
    { id: 4, model: 'GM', color: 'Rosa', km: 0, newCar: true },
    { id: 5, model: 'Honda', color: 'Branco', km: 20000, newCar: false },
    { id: 6, model: 'BYD', color: 'Cinza', km: 50000, newCar: false },
    { id: 7, model: 'Cherry', color: 'Verde', km: 0, newCar: true }
  ]

  return (
    <div className='App'>
      {/*Loop em array de objetos, usando iteração do componente*/}
      {cars.map(car => {
        <CarDetails
          model={car.model}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      })}

      <h1>Bem-vindo! Fundamentos 2 intermediário</h1>

      {/*Imagem em public */}
      <div>
        <img src='botafogo.png' alt='Escudo do Fogão' />
      </div>

      {/*Imagem em asset */}
      <div>
        <img src={Donald} alt='Pato' />
      </div>
      <ManageData />
      <LisRender />
      <ConditionalRender />
      {/*Props */}
      <ShowUserName name='Ed' />

      {/*Destrucruring*/}
      <CarDetails model='FIAT' km={80000} color='Prata' newCar={false} />

      {/*Reaproveitando componentes */}
      <CarDetails model='FORD' km={10000} color='Preto' newCar={false} />
      <CarDetails model='HONDA' km={0} color='Azul' newCar={true} />

      {/*Fragment*/}
      <Fragments teste="teste de props"/>

      {/*Children*/}
      <Container myValue="1"><p>Este é conteúdo </p></Container>
      <Container myValue="2"><p>Este é conteúdo do segundo container</p></Container>
    </div>
  )
}

export default App
