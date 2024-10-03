import { useState } from 'react';

export default function ManageData() {

    let someData = 5;
    console.log("iniciando variavel com valor", someData);

    const [number, setNumber] = useState(10);
    console.log("Alterando estado da varialvel passando parametro no useState", number);
    return (
        <div>
            <div>
            <p>Valor:{someData}</p>
            <button onClick={() => console.log(someData = 15)}>Muda Valor Novamente, atribuindo a variavel</button>
            
            </div>

            <div>
            <button onClick={() => setNumber(20)}>Muda Valor outra vez, função do useState setNumber</button>
            <p>Valor: {number}</p>
            </div>        
       
        </div>
    )
}