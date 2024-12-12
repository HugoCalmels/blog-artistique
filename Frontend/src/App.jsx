import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dessins from './pages/Dessins/Dessins'
import CarnetsDeVoyages from './pages/Dessins/dropdown-menu/Carnets-de-voyages/CarnetsDeVoyages'
import DessinsEtCroquis from './pages/Dessins/dropdown-menu/Dessins-et-croquis/DessinsEtCroquis'
import Paysages from './pages/Dessins/dropdown-menu/Paysages/Paysages'
import Perfs from './pages/Perfs/Perfs'
import Gilles from './pages/Perfs/Gilles/Gilles'
import Volgane from './pages/Perfs/Volgane/Volgane'
import Curiosites from './pages/Curiosités/Curiosites'
import Home from './pages/Home/Home'
import Navbar from './common/navbar/Navbar';

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/dessins" element={<Dessins />} />
        <Route path="/dessins/dessins-et-croquis" element={<DessinsEtCroquis />} />
        <Route path="/dessins/paysages" element={<Paysages />} />
        <Route path="/dessins/carnets-de-voyages" element={<CarnetsDeVoyages />} />
        <Route path="/performances" element={<Perfs />} />
        <Route path="/performances/gilles" element={<Gilles />} />
        <Route path="/performances/volgane" element={<Volgane />} />
        <Route path="/curiosites" element={<Curiosites />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
