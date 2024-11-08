import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Galeria from './components/Galeria';
import FontSelector from './components/FontSelector';
import { FaHeart } from "react-icons/fa";
import FotosApp from './FotoApp';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  .p{
    color: #ff008c;
    font-size: 28px;
    font-weight: bolder;
  }
  @media (max-width: 768px) {
   
  }
`;


function App() {
  const palavra = "Amo-te muito Ciso"; // Palavra que será animada
  const letras = palavra.split(""); // Divide a palavra em letras
  const [textoAnimado, setTextoAnimado] = useState(""); // Texto animado exibido
  const [indice, setIndice] = useState(0); // Índice da letra atual

  useEffect(() => {
    if (indice < letras.length) {
      const intervalo = setTimeout(() => {
        setTextoAnimado((prev) => prev + letras[indice]);
        setIndice(indice + 1);
      }, 200); // Intervalo de 150ms entre cada letra
      return () => clearTimeout(intervalo);
    }
  }, [indice, letras]);

  

  return (
    <AppContainer >
      <h1>Galeria Ciso</h1>
      <p className='p'>
      {textoAnimado}! <FaHeart />
    </p>
      <FotosApp />
    </AppContainer>
  );
}

export default App;
