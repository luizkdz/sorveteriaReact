import React from 'react';
import './style.css';
import ImagemLogo from './logo.png';
import Imagem1Grid from './sabor-oreo.png';
import Imagem2Grid from './sabor-pistache.png';
import Imagem3Grid from './sabor-cookies-avela.png';
import Imagem4Grid from './sorbet-kiwi.png';
import Imagem5Grid from './sabor-oreo.png';
import Imagem6Grid from './sabor-oreo.png';

export default function GridSabores(){
    return(
        <div>
            <h1>Sabores de Sorvete</h1>
            <div className = "container">
            <div className = "card"><img src = {Imagem1Grid}/><h2>Sorvete de Oreo</h2><p>Delicioso sorvete sabor Oreo<br/>uma explosão de sabor</p></div>
            <div className = "card"><img src = {Imagem2Grid}/><h2>Sorvete de Oreo</h2><p>Delicioso sorvete sabor Oreo<br/>uma explosão de sabor</p></div>
            <div className = "card"><img src = {Imagem3Grid}/><h2>Sorvete de Oreo</h2><p>Delicioso sorvete sabor Oreo<br/>uma explosão de sabor</p></div>
            </div>
            <div className = "container">
            <div className = "card"><img src = {Imagem4Grid}/><h2>Sorvete de Oreo</h2><p>Delicioso sorvete sabor Oreo<br/>uma explosão de sabor</p></div>
            <div className = "card"><img src = {Imagem5Grid}/><h2>Sorvete de Oreo</h2><p>Delicioso sorvete sabor Oreo<br/>uma explosão de sabor</p></div>
            <div className = "card"><img src = {Imagem6Grid}/><h2>Sorvete de Oreo</h2><p>Delicioso sorvete sabor Oreo<br/>uma explosão de sabor</p></div>
            </div>
        </div>
    )
}