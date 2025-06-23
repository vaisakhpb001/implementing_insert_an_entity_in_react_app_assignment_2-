import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function AddMovieForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    genre: '',
    releaseYear: '',
    synopsis: '',
    posterUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Movie:', formData); // No actual saving required
    navigate('/');
  };

  return (
    <div>
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} required /><br />
        <input type="text" name="director" placeholder="Director" onChange={handleChange} required /><br />
        <select name="genre" onChange={handleChange} required>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
        </select><br />
        <input type="number" name="releaseYear" placeholder="Release Year" onChange={handleChange} required /><br />
        <textarea name="synopsis" placeholder="Synopsis" onChange={handleChange} required></textarea><br />
        <input type="url" name="posterUrl" placeholder="Poster Image URL" onChange={handleChange} required /><br />
        <button type="submit">Submit</button>
        <button type="button" onClick={() => navigate('/')}>Cancel</button>
      </form>
    </div>
  );
}

export default AddMovieForm;
