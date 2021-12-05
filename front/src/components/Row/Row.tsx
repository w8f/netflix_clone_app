import { useState, useEffect } from "react";
import axios from "../../axios";
import "./Row.scss";
import Youtube from "react-youtube";

const API_KEY = process.env.REACT_APP_API_KEY;

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

type Options = {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
};

const baseURL = "https://image.tmdb.org/t/p/original";

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  const opts: Options = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = async (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerUrl = await axios.get(
        `/movie/${movie.id}/videos?api_key=${API_KEY}`
      );
      console.log(trailerUrl.data.results[0]);
      setTrailerUrl(trailerUrl.data.results[0]?.key);
    }
  };

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
              onClick={() => handleClick(movie)}
            />
          ))}
        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>
    </>
  );
};
