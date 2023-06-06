import './CardArtigo.css';

export default function CardArtigo(props) {

    return (
        <>
            <div className='artigo-individual-blog'>
                <img src={props.artigo.imgUrl} alt="" />
                <div>
                    <span>{props.artigo.categoria.descricao}</span>
                    <h2>{props.artigo.titulo}</h2>
                    <h3>{props.artigo.texto}</h3>
                    <button>Ler mais <img src="https://img.icons8.com/ios-glyphs/90/45c4b0/chevron-right.png" alt="chevron-right" /></button>
                </div>
            </div>
        </>
    );
}