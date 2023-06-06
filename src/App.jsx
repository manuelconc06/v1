import "./App.css";
import {Routes, Route, Link} from 'react-router-dom'
import Hoteles from './pages/hotel'
import Detalle from './pages/detail'

const App = () => {
 
  return (
    <>
      <div>
      <Link to="/"></Link>
      <Link to="/detalle"></Link>
        <Routes>
          <Route path="detalle/:id" element={<Detalle/>}>
          </Route>
          <Route path="/" element={<Hoteles/>}>
          </Route>
        </Routes>
          
      </div>
    </>
  );
}

export default App;
