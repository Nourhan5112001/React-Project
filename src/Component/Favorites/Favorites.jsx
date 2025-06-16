import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { removeFromFavorites } from '../../slices/favoritesSlice';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromFavorites = (movie) => {
    dispatch(removeFromFavorites(movie));
  };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', paddingTop: '40px', color: '#fff' }}>
      <div className="container">
        <h2 className="mb-4 text-center text-warning">🎬 My Favorite Movies</h2>
        {favorites.length > 0 ? (
          <div className="row justify-content-center">
            {favorites.map((movie) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={movie.id}>
                <div 
                  className="card shadow h-100" 
                  style={{ borderRadius: '15px', overflow: 'hidden' }}
                >
                  <img 
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                    className="card-img-top"
                    alt={movie.title}
                    style={{ height: '400px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title text-center">{movie.title}</h5>
                    <p className="card-text text-muted" style={{ fontSize: '0.9rem' }}>
                      {movie.overview ? movie.overview.substring(0, 100) + '...' : 'No description available.'}
                    </p>
                    <div className="d-grid gap-2 mt-3">
                      <button 
                        className="btn btn-outline-primary"
                        onClick={() => navigate(`/details/${movie.id}`)} 
                      >
                        View Details
                      </button>
                      <button 
                        className="btn btn-outline-danger"
                        onClick={() => handleRemoveFromFavorites(movie)} 
                      >
                        <FaTrash className="me-2" /> Remove from Favorites
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-5">
            <h5 className="text-light">😕 You haven’t added any favorite movies yet.</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
