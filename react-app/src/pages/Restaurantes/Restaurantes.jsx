import './Restaurantes.css';

export default function Restaurantes() {
  return (
    <>
      <section className='Restaurantes'>
        <div className='search-area'>
          <h1>Busque por restaurantes que você deseja</h1>
          <input type="text" />
        </div>
        <div className='filtro'>
          <p>Filtrar por culinária</p>
          <div>
            <button className='active'>Italiana</button>
            <button>Chinesa</button>
            <button>Mexicana</button>
            <button>Indiana</button>
            <button>Japonesa</button>
            <button>Francesa</button>
            <button>Brasileira</button>
            <button>Tailandesa</button>
            <button>Grega</button>
            <button>Turca</button>
          </div>
        </div>
        <div className="lista-restaurantes">
          <div className="cada-restaurante">
            <p>Vegan Food</p>
            <div>
              <div>Economia de Água</div>
              <div>Produção Local</div>
            </div>
          </div>
          <div className="cada-restaurante">
            <p>Vegan Food</p>
            <div>
              <div>Economia de Água</div>
              <div>Produção Local</div>
              <div>Uso de Embalagens Sustentáveis</div>
            </div>
          </div>
          <div className="cada-restaurante">
            <p>Vegan Food</p>
            <div>
              <div>Economia de Água</div>
              <div>Produção Local</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}