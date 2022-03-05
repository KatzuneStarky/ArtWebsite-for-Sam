import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Components/Pages/HomePage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import Arte from './Components/Pages/Arte/Arte';
import Proyectos from './Components/Pages/Proyectos/Proyectos';
import Contacto from './Components/Pages/Contacto/Contacto';

function App() {
  return (
    <>
      <Router>
        <Navbar />      
        <div className="pages">
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/arte' element={<Arte />} />
            <Route path='/proyectos' element={<Proyectos />} />
            <Route path='/contacto' element={<Contacto />} />
          </Routes>  
        </div>
      </Router>            
    </>
  );
}

export default App;
