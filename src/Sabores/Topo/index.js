import React from 'react';
import './style.css';
import ImagemLogo from './logo.png';
import {Link} from "react-router-dom";

export default function Banner(){
    return(
        <div className="topo">
            <Link to ='/'>
            <img src = {ImagemLogo}/>
            </Link>
            <ul>
                <li><Link to = '/' >Home</Link></li>
                <li><Link to = '/sabores' >Sabores</Link></li>
                <li><Link to = '/sobre'>Sobre</Link></li>
            </ul>
        </div>
    )
}