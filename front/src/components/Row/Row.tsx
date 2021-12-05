import "./Row.scss";
import Youtube from "react-youtube";
import useRow, { Props, baseURL } from "../Row/useRow";

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  const { movies, trailerUrl, handleClick, opts } = useRow(fetchUrl);

  return (
    <>
      <div className="Row">
        <h2>{title}</h2>
        <div className="Row-posters">
          {/* ポスターコンテンツ */}
          {movies.map((movie) => (
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
