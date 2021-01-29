import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import key from '../config';
import Movie from './Movie';
import { Result } from '../Types/Result';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

type Filter = 'NONE' | 'ASC' | 'DESC';

const Movies: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState<Result[]>();
  const [filter, setFilter] = useState<Filter>('NONE');

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-UK&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results.slice(0, 20));
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!movies) return;
    switch (filter) {
      case 'DESC':
        setMovies([...movies].sort((a, b) => a.vote_average - b.vote_average));
        break;
      case 'ASC':
        setMovies([...movies].sort((a, b) => b.vote_average - a.vote_average));
        break;
      default:
        break;
    }
  }, [filter]);

  const handleClick = () => {
    filter === 'DESC' ? setFilter('ASC') : setFilter('DESC');
  };

  if (loading) return <div>loading </div>;
  else {
    return (
      <Container>
        <button onClick={handleClick}>
          {filter === 'ASC' ? 'Sort by ascending' : 'Sort by descending'}
        </button>
        <MovieContainer>
          {movies ? (
            movies.map((movie, i) => {
              return <Movie movie={movie} key={i} />;
            })
          ) : (
            <div>error</div>
          )}
        </MovieContainer>
      </Container>
    );
  }
};

export default Movies;
