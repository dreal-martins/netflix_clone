import React, { useEffect, useRef, useState } from 'react';
import '../styles/Banner.css';
import axios from '../features/axios/axios';
import requests from '../features/axios/Requests';

function Banner() {
  const [movie, setMovie] = useState([]);

  const shouldLog = useRef(true);

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      async function fetchData() {
        const request = await axios.get(requests.fetchTrending);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
        return request;
      }
      fetchData();
    }
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: 'top center',
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button">play</button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
        <div className="banner--fadeButton" />
      </header>
    </>
  );
}

export default Banner;
