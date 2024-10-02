export default function Challenge () {
  const A = 5
  const B = 2

  const handleSoma = () => {
    
    return A + B; 
      
  }

  return (
    <div>
      <p>Impressão do valor A: {A}</p>
      <p>Impressão do valor B: {B}</p>

      <div>
        <button onClick={() => console.log(handleSoma())} >Clique para somar esses valores</button>   

      </div>
    </div>
  )
}
