import React from 'react';
import styled from 'styled-components';

const GaleriaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const Foto = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: 2px solid #ddd;
  border-radius: 8px;
`;

const Galeria = ({ fotos }) => {
  return (
    <GaleriaContainer>
      {fotos.map((foto) => (
        <Foto key={foto.id} src={foto.src} alt={foto.alt} />
      ))}
    </GaleriaContainer>
  );
};

export default Galeria;
