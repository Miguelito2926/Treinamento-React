// Aqui uma outra forma de criar e exportar um componente
const TemplateExpressions = () => {

    const name = "Ednaldo";
    const data = {
        job:" Desenvolvedor",
        expert: "Senior"
    };

    return(
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job} {data.expert}</p>
            <p>{console.log("Jsx React")}</p>
        </div>
    );
};
export default TemplateExpressions;
