import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../slices/moviesSlice';
import { addToFavorites, removeFromFavorites } from '../../slices/favoritesSlice';

const Movies = ({ searchTerm }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movies = useSelector(state => state.movies.movies);
  const status = useSelector(state => state.movies.status);
  const error = useSelector(state => state.movies.error);
  const favorites = useSelector(state => state.favorites.favorites);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMovies());
    }
  }, [status, dispatch]);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToFavorites = (movie) => {
    dispatch(addToFavorites(movie));
  };

  const handleRemoveFromFavorites = (movie) => {
    dispatch(removeFromFavorites(movie));
  };

  const isFavorite = (movie) => {
    return favorites.some(fav => fav.id === movie.id);
  };

  return (
    <div className="container-fluid min-vh-100 bg-black text-white py-4">
      <div className="container">
        <h2 className="mb-4 text-center fw-bold border-bottom pb-2">🎬 Popular Movies</h2>

        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p className="text-danger">There is an error: {error}</p>}

        {filteredMovies.length > 0 ? (
          <div className="row">
            {filteredMovies.map((movie) => (
              <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={movie.id}>
                <div className="card h-100 bg-dark text-light border-0 shadow-sm movie-card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="card-img-top"
                    alt={movie.title}
                    style={{ height: '400px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text text-secondary" style={{ fontSize: '0.9rem' }}>
                      {movie.overview.substring(0, 100)}...
                    </p>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <button
                        className="btn btn-outline-light btn-sm"
                        onClick={() => navigate(`/details/${movie.id}`)}
                      >
                        View Details
                      </button>
                      <button
                        className="btn btn-link text-danger"
                        onClick={() =>
                          isFavorite(movie)
                            ? handleRemoveFromFavorites(movie)
                            : handleAddToFavorites(movie)
                        }
                      >
                        {isFavorite(movie) ? <FaHeart /> : <FaRegHeart className="text-white" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No movies found.</p>
        )}
      </div>

      <style>{`
        .movie-card:hover {
          transform: scale(1.02);
          transition: 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Movies;
