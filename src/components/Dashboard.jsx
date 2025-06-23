import { useNavigate } from 'react-router-dom';
import MovieCard from './MovieCard';

function Dashboard() {
  const navigate = useNavigate();

  const handleAddMovie = () => {
    navigate('/add-movie');
  };

  return (
    <div>
      <h1>Movie Dashboard</h1>
      <button onClick={handleAddMovie}>Add Movie</button>
      <div className="movie-list">
        {/* Render your MovieCard components here */}
      </div>
    </div>
  );
}

export default Dashboard;
