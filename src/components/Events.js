export default function Events () {
  const handleMeuEvento = event => {
    console.log(event)
    console.log('Você ativou o Evento')
  }
  return (
    <div>
      <div>
        <button onClick={handleMeuEvento}>Clique aqui!</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou em outro evento")}>Clique aqui Também!</button>
      </div>
    </div>
  )
}
