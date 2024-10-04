//Trabalhando com Destructuring de props*
export default function CarDetails({model, km, color, newCar}) {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: <strong>{model}</strong></li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
        {newCar && <p>Este carro é zero!</p>}
    </div>
  )
}
