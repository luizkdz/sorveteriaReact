import React from 'react';
import './style.css';
import imagemSorvete1 from './banner-sabores.jpg';
import imagemSorvete2 from './eventos-image.jpg';
import imagemSorvete3 from './sobre-image.jpg';

export default function SecaoSabores(){
    return(
        <div className = "area-secao">
            <div className = "card">
                <img src = {imagemSorvete1}/><div className = "texto-card"><h1>Nossos produtos</h1><h2>Novos e deliciosos!</h2><p>Sorvete bom é aquele feito com os melhores ingredientes!<br/> Aqui na gelateria todos os nossos produtos são naturais, à<br/> base de frutas e sem nenhum conservante! Também temos<br/> opções sem lactose e sem açúcar. Venha conhecer e<br/> perceber que tem como o sorvete ser delicioso e saudável ao<br/> mesmo tempo!</p></div>
            </div>
            <div className = "card">
                <div className = "texto-card"><h1>Nossos produtos</h1><h2>Novos e deliciosos!</h2><p>Sorvete bom é aquele feito com os melhores ingredientes!<br/> Aqui na gelateria todos os nossos produtos são naturais, à<br/> base de frutas e sem nenhum conservante! Também temos<br/> opções sem lactose e sem açúcar. Venha conhecer e<br/> perceber que tem como o sorvete ser delicioso e saudável ao<br/> mesmo tempo!</p></div><img src = {imagemSorvete2}/>
            </div>
            <div className = "card">
                <img src = {imagemSorvete3}/><div className = "texto-card"><h1>Nossos produtos</h1><h2>Novos e deliciosos!</h2><p>Sorvete bom é aquele feito com os melhores ingredientes!<br/> Aqui na gelateria todos os nossos produtos são naturais, à<br/> base de frutas e sem nenhum conservante! Também temos<br/> opções sem lactose e sem açúcar. Venha conhecer e<br/> perceber que tem como o sorvete ser delicioso e saudável ao<br/> mesmo tempo!</p></div>
            </div>
        </div>
    )
}