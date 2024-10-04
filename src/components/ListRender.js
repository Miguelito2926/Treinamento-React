import { useState } from 'react'

export default function LisRender () {
  const lista = useState(['Ednaldo', 'Miguel', 'Dione', 'Juba', 'Nica'])

  const [users, setUsers] = useState([
    { id: 1, name: 'Ednaldo' },
    { id: 2, name: 'Miguel' },
    { id: 3, name: 'Dione' },
    { id: 4, name: 'Juba' },
    { id: 5, name: 'Nica' }
  ])

const deleteRandom = () => {
  const randomNumber = Math.floor(Math.random() * 6);

  setUsers((prevUsers) => {
    console.log("Estado anterior", prevUsers);
    return prevUsers.filter((user) => randomNumber !== user.id)
  })
}

  return (
    <div>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.id},{user.name}
            </li>
          ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
      </div>
    </div>
  )
}
