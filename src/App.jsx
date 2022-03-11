import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage';
import Navbar from './Components/Navbar/Navbar';
import Arte from './Pages/Arte/Arte';
import Proyectos from './Pages/Proyectos/Proyectos';
import Contacto from './Pages/Contacto/Contacto';
import Upload from './Components/Upload/Upload';
import AddArticle from './Components/Articles/AddArticle';

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
            <Route path='/upload' element={<Upload />} />
            <Route path='/blog' element={<AddArticle />} />
          </Routes>  
        </div>
        <HomePage />
      </Router>            
    </>
  );
}

export default App;
