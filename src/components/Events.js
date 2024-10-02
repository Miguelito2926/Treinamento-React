export default function Events() {

    const meuEvento = (event) => {
        console.log(event);
        console.log("Você ativou o Evento");
    };
    return(
        <div>
            <button onClick={meuEvento}>Clique aqui!</button>
        </div>
    )
}