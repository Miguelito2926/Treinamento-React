import { useState } from 'react';
import './MyForm.css';

export default function MyForm() {

    // 3 - gerenciamento de dados
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (event) => {
        setName(event.target.value)
    }

    return(
        <div>

            {/*1- criação de formulario*/}
            <form>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite seu nome." onChange={handleName}/>
                </div>

                   {/* 2 - label envolvendo input*/}
                   <label>
                    <span>E-mail:</span>
                    <input 
                    type="email"
                    name='email' 
                    placeholder='Digite seu e-mail.'
                    onChange={(event) => setEmail(event.target.value)}/>
                   </label>                   
                   <input type="submit" value='Enviar' />
            </form>
        </div>
    )
}