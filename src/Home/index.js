import logo from '../logo.svg';
import '../App.css';
import Topo from '../Home/Topo/index.js';
import Banner from '../Home/Banner/index.js';
import SecaoSabores from '../Home/SecaoSabores/index.js';
import Rodape from '../Home/Rodape/index.js';


function Home() {
  return (
    <div className="App">
      <Topo/>
      <Banner/>
      <SecaoSabores/>
      <Rodape/>
    </div>
  );
}

export default Home;
