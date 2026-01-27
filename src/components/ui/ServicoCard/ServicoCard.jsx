function ServicoCard (props){
    return (
        <div className="servicos_card">
            <svg width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <image href={props.imagem} width="24" height="24" />
            </svg>
            <h3>{props.titulo}</h3>
            <p>{props.descricao}</p>
        </div>
    )
} export default ServicoCard;