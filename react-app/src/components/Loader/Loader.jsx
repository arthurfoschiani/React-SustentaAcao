import './Loader.css';

export default function Loader(props) {

    return (
        <>
            <section className='loader'>
                <div className="pulse-loader"></div>
                <span>Carregando...</span>
            </section>
        </>
    );
}