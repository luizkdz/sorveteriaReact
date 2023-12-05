import React from 'react';
import './style.css';
import imagemGaleraSorvete from './sobre-image.jpg';
import ImagemSorveteria from './sorveteria.jpg';


export default function Gelateria(){
    return(
    <div>
        <div class = "banner-gelateria">
        <h1>A GELATERIA</h1>
        </div>
        <div className = "sobre-nos">
            <h1>Sobre nós</h1>
            <p>Nós simplesmente amamos sorvete!</p>
            <p>LOREM DAWDADADAWD</p>
        </div>
        <div className = "container-sobre-nos">
            <img src = {imagemGaleraSorvete}/>
            <img src = {ImagemSorveteria}/>
        </div>

    </div>
    )
}