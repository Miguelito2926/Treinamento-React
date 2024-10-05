import React, { useState } from 'react'

export default function Message({msg}) {

    const message = useState();
  return (
    <div>
        A mensagem é: {msg}
    </div>
  )
}
