import React, { useState } from 'react';
import Estrela from '../Estrela/Estrela';

export default function Avaliacao () {
  const [rating, setRating] = useState(0);

  const handleStarSelect = (selectedRating) => {
    setRating(selectedRating);
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
