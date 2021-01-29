import React from 'react';
import styled from 'styled-components';

import { Result } from '../Types/Result';

interface Props {
  movie: Result;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: 10px;
`;

const Movie: React.FC<Props> = ({ movie }) => {
  return (
    <Container>
      <MovieContainer>
        <div>
          <h1>{movie.title}</h1>
        </div>
        <div>{movie.overview}</div>
        <div>
          <b>Rating:</b> {movie.vote_average}
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
          alt={movie.title}
        ></img>
      </MovieContainer>
    </Container>
  );
};

export default Movie;
