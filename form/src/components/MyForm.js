import './MyForm.css';

export default function MyForm() {
    return(
        <div>

            {/*1- criação de formulario*/}
            <form>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite seu nome." />
                </div>

                   {/* 2 - label envolvendo input*/}
                   <label>
                    <span>E-mail:</span>
                    <input type="email" name='email' placeholder='Digite seu e-mail.'/>
                   </label>
                   <input type="submit" value='Enviar' />
            </form>
        </div>
    )
}