import React from 'react';
import './style.css';
import Topo from '../Home/Topo/index.js';
import Gelateria from './Banner-sobre/index.js';
import Rodape from '../Home/Rodape/index.js';

export default function Sobre(){
    return(
        <div>
            <Topo/>
            <Gelateria/>
            <Rodape/>

        </div>
    )
}