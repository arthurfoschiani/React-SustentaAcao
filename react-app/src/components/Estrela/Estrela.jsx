import React from 'react';

export default function Estrela ({ selected, onSelect }) {
    return (
      <span onClick={onSelect}>
        {selected ? '★' : '☆'}
      </span>
    );
} 