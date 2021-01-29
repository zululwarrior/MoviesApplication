import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import key from '../config';
import Movie from './Movie';
import { Result } from '../Types/Result';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Movies: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<Result[]>();

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-UK&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>loading </div>;
  else {
    return (
      <Container>
        {movies ? (
          movies.slice(0, 20).map((movie, i) => {
            return <Movie movie={movie} key={i} />;
          })
        ) : (
          <div>error</div>
        )}
      </Container>
    );
  }
};

export default Movies;
