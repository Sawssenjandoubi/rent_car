
import './App.css';
import NavScrollExample from './Components/Navbar/Navbar';

import 'bootstrap'
import '../src/Components/Navbar/navbar.css'


import SectionSvg from './Components/SectionSvg/SectionSvg';
import Avis from './Components/Avis/Avis';
import {Routes,Route} from 'react-router-dom'
import PgAide from './Components/PgAide/PgAide';
import Footerr from './Components/footer/Footer'
import FirstSection from './Components/first-section-home/FirstSection'
import Layout from './Components/Navbar/Layout';

function App() {
  return (
    <div className="App">
<Routes>
        <Route path='/'element={<Layout/>}>
        <Route index element={<FirstSection/>}/>
        <Route path='/aide' element={<PgAide/>}/>
        </Route>
</Routes>
      
    </div>
  );
}

export default App;
