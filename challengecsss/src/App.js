import logo from './logo.svg';
import './App.css';
import Car from './components/Car';

function App() {
const myCars = [
  {name: 'Fusca', km: 5000, color: 'Preto'},
  {name: 'Brasilia', km: 15000, color: 'Amarela'},
  {name: 'Kombi', km: 65000, color: 'Azul'},
  {name: 'Opala', km: 2000, color: 'Verde'},
];

  return (
    <div className="App">
     <h1>Showroom de carros</h1>

     <div className='car-container'>
      {myCars.map((car) => (<Car car={car}/>))}
     </div>
    </div>
  );
}

export default App;
