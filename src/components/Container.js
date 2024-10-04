import React from 'react'

export default function Container({children, myValue}) {
  return (
    <div>
        <h2>Este texto do container</h2>
        {children}
        {myValue}
    </div>
  )
}
