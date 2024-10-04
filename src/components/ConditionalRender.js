import { useState } from 'react'

export default function ConditionalRender () {
  const [x] = useState(true)
  const [name, setName] = useState("Ednaldo")

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso</p>}

      <h1>If trenário</h1>
      {name === "Miguel" ? (
        <div>
          <p>O nome é {name}!</p>
        </div>
      ) : (
        <div>
          <p>O nome não encontrado!</p>
        </div>
      )}
      <button onClick={() => setName("Miguel")}>
        Clique aqui altera o estado do nome!
      </button>
    </div>
  )
}
