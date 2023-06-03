import './CardRestaurante.css';

export default function CardRestaurante(props) {
    const { restaurante, praticas } = props

    return (
        <>
            <div className="cada-restaurante">
                <p>{restaurante}</p>
                <div>
                    {praticas.map(pratica => (
                        <div>{pratica.nome}</div>
                    ))}
                </div>
            </div>
        </>
    );
}