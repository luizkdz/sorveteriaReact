import React from 'react';
import './style.css';
import imagemGaleraSorvete from './sobre-image.jpg';
import ImagemSorveteria from './sorveteria.jpg';


export default function Gelateria(){
    return(
    <div>
        <div className = "banner-gelateria">
        <h1>A GELATERIA</h1>
        </div>
        <div className = "sobre-nos">
            <h1>Sobre nós</h1>
            <p>Nós simplesmente amamos sorvete!</p>
            <p className = "texto-sobre-nos">Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete<br/> para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas<br/> para a produção final do sorvete. Vendemos tanto para varejo como para atacado.<br/>
Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar<br/> junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas<br/> e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o<br/> melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
        </div>
        <div className = "container-sobre-nos">
            <img src = {imagemGaleraSorvete}/>
            <img src = {ImagemSorveteria}/>
        </div>

    </div>
    )
}