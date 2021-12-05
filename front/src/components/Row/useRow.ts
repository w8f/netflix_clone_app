import axios from "../../axios";
import { useState, useEffect } from "react";

export type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: string;
};

export type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};

export type Options = {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
};

const API_KEY = process.env.REACT_APP_API_KEY;

const opts: Options = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 1,
  },
};

export const baseURL = "https://image.tmdb.org/t/p/original";

const useRow = (fetchUrl: string) => {
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

  return { movies, setMovies, trailerUrl, setTrailerUrl, handleClick, opts };
};

export default useRow;
