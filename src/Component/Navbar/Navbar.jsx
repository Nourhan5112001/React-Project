import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useSelector } from 'react-redux';
import { authcontext } from '../../Context/auth';
import logo from '../../assets/logo.jpg'; // تأكد من وجود ملف الشعار في المسار الصحيح

export default function Navbar({ onSearch }) {
  const favoritesCount = useSelector(state => state.favorites.favorites.length);
  const { isAuth } = useContext(authcontext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3  shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" style={{ width: '40px', height: '40px', marginRight: '10px',  borderRadius:'50%' }} />
          
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/movies">Movies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/favorites">
                <MdOutlineFavoriteBorder size={18} /> Favorites ({favoritesCount})
              </Link>
            </li>
            {isAuth ? (
              <li className="nav-item">
                <Link className="nav-link text-white" to="/logout">Logout</Link>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>

          <form className="d-flex">
            <input
              className="form-control bg-light border-0 rounded-pill px-3"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              style={{ width: '200px' }}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}
