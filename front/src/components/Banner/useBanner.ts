import { useEffect, useState } from "react";
import axios from "../../axios";
import { requests } from "../../request";

type movieProps = {
  title?: string;
  name?: string;
  original_name?: string;
  backdrop_path?: string;
  overview?: string;
};

const useBanner = () => {
  const [movie, setMovie] = useState<movieProps>({});
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.feachNetflixOriginals);
      console.log(request.data.result);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, []);
  console.log(movie);

  // descriptionの切り捨て用関数
  const truncate = (str: any, n: number) => {
    if (str !== undefined) {
      return str.length > n ? str?.substr(0, n - 1) + "..." : str;
    }
  };
  return { movie, truncate };
};

export default useBanner;
