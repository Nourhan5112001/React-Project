import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: '#0d0d0d', color: '#f1f1f1', minHeight: '100vh', paddingTop: '60px' }}>
      <div className="container text-center">
        <h1 className="text-warning mb-4">🌟 About Us</h1>
        <p className="lead mb-5">
          Welcome to MovieVerse — your space to explore, favorite, and discover amazing movies from around the world. 🎬
        </p>

        <div className="row align-items-center justify-content-center mb-5">
          <div className="col-md-6 mb-4">
            <img 
              src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4" 
              alt="Team working" 
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6 text-start">
            <h3 className="text-light">Who We Are</h3>
            <p style={{ fontSize: '1.1rem' }}>
              We’re a passionate team of movie lovers and tech enthusiasts who believe in creating smooth, stylish, and intuitive platforms.
              MovieVerse is more than an app — it’s a vibe where you can collect your favorite films and dive deep into cinema.
            </p>
            <p style={{ fontSize: '1.1rem' }}>
              From Hollywood to indie gems, we’re here to help you keep track of what you love and explore what you might’ve missed.
            </p>
          </div>
        </div>

        <hr className="text-secondary" />

        <div className="mt-5">
          <h4 className="text-info mb-3">✨ Our Mission</h4>
          <p className="px-3" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
            To connect people through the art of film, making movie discovery personal, fun, and unforgettable.
          </p>
        </div>

        <footer className="mt-5 text-muted small">
          Made with ❤️ by the MovieVerse Team • 2025
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;

