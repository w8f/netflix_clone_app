import { useState, useEffect } from "react";
import axios from "../../axios";
import "./Row.scss";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: string;
};

type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};

const baseURL = "https://image.tmdb.org/t/p/original";

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <>
      <div className="Row">
        <h2>{title}</h2>
        <div className="Row-posters">
          {/* ポスターコンテンツ */}
          {movies.map((movie, i) => (
            <img
              key={movie.id}
              className={`Row-poster ${isLargeRow && "Row-poster-large"}`}
              src={`${baseURL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};
