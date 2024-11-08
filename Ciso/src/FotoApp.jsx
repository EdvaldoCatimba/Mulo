import React, { useState } from 'react';
import './Foto.css'
import Img1 from './assets/Ciso Sensível/img1.jpg'
import Img2 from './assets/Ciso Sensível/img2.jpg'
import Img3 from './assets/Ciso Sensível/img3.jpg'
import Img4 from './assets/Ciso Sensível/img4.jpg'
import Img5 from './assets/Ciso Sensível/img5.jpg'
import Img6 from './assets/Ciso Sensível/img6.jpg'
import Img7 from './assets/Ciso Sensível/img7.jpg'
import Img8 from './assets/Ciso Sensível/img8.jpg'
import Img9 from './assets/Ciso Sensível/img9.jpg'
import Img10 from './assets/Ciso Sensível/img10.jpg'
import Img11 from './assets/Ciso Sensível/img11.jpg'
import Img12 from './assets/Ciso Sensível/img12.jpg'
import Img13 from './assets/Ciso Sensível/img13.jpg'
import Img14 from './assets/Ciso Sensível/img14.jpg'
import Img15 from './assets/Ciso Sensível/img15.jpg'
import Img16 from './assets/Ciso Sensível/img16.jpg'
import Img17 from './assets/Ciso Sensível/img17.jpg'
import { LuImagePlus } from "react-icons/lu";
import styled from 'styled-components';

const Foto = styled.img`
  width: 210px;
  height: 260px;
  object-fit: cover;
  border: 2px solid #ddd;
  border-radius: 8px;
  @media (max-width: 768px){
    width: 200px;
  height: 250px;
  }
`;

const FotosApp = () => {
    const fotosPadrao = [
        { id: 1, src: Img1, alt: 'Foto 1' },
        { id: 2, src: Img10, alt: 'Foto 2' },
        { id: 3, src: Img3, alt: 'Foto 3' },
        { id: 1, src: Img4, alt: 'Foto 4' },
        { id: 2, src: Img5, alt: 'Foto 5' },
        { id: 3, src: Img6, alt: 'Foto 6' },
        { id: 1, src: Img13, alt: 'Foto 7' },
        { id: 2, src: Img8, alt: 'Foto 8' },
        { id: 3, src: Img9, alt: 'Foto 9' },
        { id: 1, src: Img2, alt: 'Foto 10' },
        { id: 2, src: Img11, alt: 'Foto 11' },
        { id: 3, src: Img16, alt: 'Foto 12' },
        { id: 1, src: Img7, alt: 'Foto 13' },
        { id: 2, src: Img14, alt: 'Foto 14' },
        { id: 3, src: Img15, alt: 'Foto 15' },
        { id: 1, src: Img12, alt: 'Foto 16' },
        { id: 2, src: Img17, alt: 'Foto 17' },
      ];

  const [fotosCarregadas, setFotosCarregadas] = useState([]);

  const handleCarregarFoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const novaFoto = {
        id: Date.now(),
        src: URL.createObjectURL(file),
        alt: file.name,
      };
      setFotosCarregadas([...fotosCarregadas, novaFoto]);
    }
  };

  return (
    <div className='con' >
      <div>
        <h2>Fotos Padrão</h2>
        <div  className="pad">
          {fotosPadrao.map((foto) => (
            <Foto key={foto.id} src={foto.src} alt={foto.alt} />
          ))}
        </div>
      </div>

        <br />
        <label className="label">
        <LuImagePlus size={20} /><span>Fotos Novas</span>
          <input type="file" accept="image/*"  className='in'
          onChange={handleCarregarFoto} />
          </label>
        <h2>Suas Fotos Carregadas</h2>
        <div className='add' >
          {fotosCarregadas.map((foto) => (
            <Foto key={foto.id} src={foto.src} alt={foto.alt} />
          ))}
        </div>
    
    </div>
  );
};

export default FotosApp;
