
import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Cars from './pages/Cars'
import CreateCarForm from './pages/CreateCars'

function App() {
  return (
    
      <div>
        <nav>
          <Link to="/">Cars</Link>
          <Link to="/create">Create Car</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Cars />} />
          <Route path="/create" element={<CreateCarForm />} />
        </Routes>
      </div>
    
  );
}


export default App
