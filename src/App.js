import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Components/Navbar/NaBar';
import '../node_modules/materialize-css/dist/css/materialize.css';
import Slider from './Components/Slider/Slider';
import Search from './Components/Search/Search';
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';
function App() {

  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Slider />
        <Search />
        <Cards />
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
