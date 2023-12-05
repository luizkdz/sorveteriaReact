import React from 'react';
import './style.css';
import ImagemSabores from './logo.png';
import Topo from './Topo/index.js';
import Rodape from '../Home/Rodape/index.js';
import BannerSabores from './Banner-sabores/index.js';
import GridSabores from './Grid-Sabores/index.js';

export default function Sabores() {
    return (
      <div className="App">
        <Topo/>
        <BannerSabores/>      
        <GridSabores/>
        <Rodape/>
      </div>
    );
  }

  