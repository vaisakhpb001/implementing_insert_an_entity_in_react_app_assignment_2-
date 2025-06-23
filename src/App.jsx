import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddMovieForm from './components/AddMovieForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add-movie" element={<AddMovieForm />} />
    </Routes>
  );
}

export default App;
