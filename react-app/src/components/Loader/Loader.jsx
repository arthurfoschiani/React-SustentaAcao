import './Loader.css';

export default function Loader(props) {

    return (
        <>
            <section className='loader'>
                <div class="pulse-loader"></div>
                <span>Carregando...</span>
            </section>
        </>
    );
}