import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: black;
  margin-bottom: 10px;
`;

const Text = styled.span`
  color: white;
  font-size: 2em;
`;

const Top: React.FC = () => {
  return (
    <Container>
      <Text>Movies application</Text>
    </Container>
  );
};

export default Top;
