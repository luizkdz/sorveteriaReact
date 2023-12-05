import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/index.js';

import Banner from '../Home/Topo/index.js';
import Sabores from '../Sabores/index.js';
import Sobre from '../Sobre/index.js';


export default function Rotas() {
  return(
    <BrowserRouter>
    
    <Routes>
    <Route path='/' element={ <Home/> }/>
    <Route path='/sabores' element={ <Sabores/> }/>
    <Route path='/sobre' element={ <Sobre/> }/>
     
    </Routes>
    </BrowserRouter>
  );
} 