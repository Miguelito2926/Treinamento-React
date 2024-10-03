import { useState } from 'react'

export default function LisRender () {
  const lista = useState(['Ednaldo', 'Miguel', 'Dione', 'Juba', 'Nica'])

  const [users] = useState([
    { id: 1, name: 'Ednaldo' },
    { id: 2, name: 'Miguel' },
    { id: 3, name: 'Dione' },
    { id: 4, name: 'Juba' },
    { id: 5, name: 'Nica' }
  ])
  return (
    <div>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))};
      </ul>
      <div>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.id},{user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
