import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";

const API_KEY = "c94b800b13b9b455a5d91c9b54e821a3";
const MOVIE_LIST_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=`;

export default function Details() {
  const { movieID } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${MOVIE_LIST_API}1`)
      .then((response) => {
        setMovies(response.data.results);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    setMovie(null);
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovie(response.data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieID]);

  const currentIndex = movies.findIndex((m) => m.id === parseInt(movieID));

  const handlePrevious = () => {
    if (currentIndex > 0) {
      navigate(`/details/${movies[currentIndex - 1].id}`);
    }
  };

  const handleNext = () => {
    if (currentIndex < movies.length - 1) {
      navigate(`/details/${movies[currentIndex + 1].id}`);
    }
  };

  if (loading) return <h3 className="text-center text-white mt-5">Loading...</h3>;
  if (error) return <h3 className="text-danger text-center mt-5">Error: {error}</h3>;
  if (!movie) return <h3 className="text-center text-white mt-5">No movie found.</h3>;

  return (
    <div className="bg-dark min-vh-100 py-5">
      <div className="container d-flex flex-column align-items-center">
        <h2 className="mb-4 text-white">{movie.title}</h2>

        <Card style={{ width: "24rem", backgroundColor: "#1c1c1c", color: "white" }} className="shadow-lg">
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <Card.Body>
            <Card.Text>
              <strong>Overview:</strong> {movie.overview || "No overview available"}
            </Card.Text>
            <Card.Text>
              <strong>Release Date:</strong> {movie.release_date}
            </Card.Text>
            <Card.Text>
              <strong>Rating:</strong> {movie.vote_average}
            </Card.Text>

            <div className="d-flex justify-content-between mt-4">
              <Button
                variant="outline-light"
                onClick={handlePrevious}
                disabled={currentIndex <= 0}
              >
                Previous
              </Button>
              <Button
                variant="outline-light"
                onClick={handleNext}
                disabled={currentIndex >= movies.length - 1}
              >
                Next
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
