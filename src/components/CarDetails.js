//Trabalhando com Destructuring de props*
export default function CarDetails({model, km, color}) {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {model}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
    </div>
  )
}
