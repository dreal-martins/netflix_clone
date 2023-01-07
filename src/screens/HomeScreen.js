import React from 'react';
import '../styles/HomeScreen.css';
import Banner from '../component/Banner';
import Nav from '../component/Nav';
import requests from '../features/axios/Requests';
import Row from '../component/Row';

function HomeScreen() {
  return (
    <div className="homescreen">
      {/* NAV  */}
      <Nav />
      {/* BANNER  */}
      <Banner />
      {/* Row  */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movie" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
