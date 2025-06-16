import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';
import Details from './Component/Details/Details';
import Home from "./Component/Home/Home";
import Movies from "./Component/Movies/Movies";
import Navbar from './Component/Navbar/Navbar';
import Favorites from './Component/Favorites/Favorites';
import Register from './register/Register';
import Login from './Component/Login/Login';
import Logout from './Component/Logout/Logout';
import { AuthProvider } from './Context/auth';
import Producted from './Component/Protected/Protected';

export default function App() {
  const [isAuth, setAuth] = useState(localStorage.getItem("token"));
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setAuth(localStorage.getItem("token"));
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <AuthProvider value={{ isAuth, setAuth }}>
      <Provider store={store}>
        <Router>
          <Navbar onSearch={handleSearch} />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Producted><Movies searchTerm={searchTerm} /></Producted>} />
            <Route path="/details/:movieID" element={<Details />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </Router>
      </Provider>
    </AuthProvider>
  );
}

