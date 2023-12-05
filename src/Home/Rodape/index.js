import React from 'react';
import './style.css';
import ImagemLogo from '../Topo/logo.png';


export default function Rodape(){
    return(
    <div className= "rodape">
        <div className = "container-rodape">
        
        
        <img src = {ImagemLogo}/>
        <div className = "area-texto-rodape">
        
        <div className = "informacoes-rodape">
        <h1>Endereço</h1>   
        <p>Av. Bernardino de Campos, 98</p>
        <p>São Paulo, SP 12345-678</p>
        </div>
        <div className = "informacoes-rodape">
        <h1>CONTATO</h1>
        <p>info@meusite.com</p>
        <p>Tel: (11) 3456-7890</p>
        </div>
        <div className = "informacoes-rodape">
        <h1>HORÁRIOS</h1>
        <p>ABERTO TODOS OS DIAS</p>
        <p>10:00 - 22:00</p>
        </div>
        </div>
        </div>
        <p class = "desenvolvido-por">Gelateria. Orgulhosamente desenvolvido por Luiz</p>
    </div>
    )
}

