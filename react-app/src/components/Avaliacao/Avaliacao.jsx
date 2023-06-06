import React, { useState } from 'react';
import Estrela from '../Estrela/Estrela';

export default function Avaliacao ({ onAvaliacaoSelecionada, valorInicial }) {
  const [rating, setRating] = useState(valorInicial);

  const handleStarSelect = (selectedRating) => {
    setRating(selectedRating);
    onAvaliacaoSelecionada(selectedRating);
  };

  return (
    <div className='estrelas'>
      {[1, 2, 3, 4, 5].map((estrela) => (
        <Estrela
          key={estrela}
          selected={estrela <= rating}
          onSelect={() => handleStarSelect(estrela)}
        />
      ))}
    </div>
  );
};
