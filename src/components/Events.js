export default function Events () {
  const handleMeuEvento = event => {
    console.log(event)
    console.log('Você ativou o Evento')
  }

  const renderSomething = (x) => {
    if (x) {
        return <h1>Se x é true retorno isso</h1>;
    } else {
        return <h4> Se x é false eu renderizo isso!</h4>
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMeuEvento}>Clique aqui!</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou em outro evento")}>Clique aqui Também!</button>
      </div>

      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}
