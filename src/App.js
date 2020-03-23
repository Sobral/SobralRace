import React from 'react';
import { Container } from './style';

function App() {
  return (
    <Container>
      <form>
        <input
          type="text"
          id="playerName"
          placeholder="Nome"
          autoComplete="off"
        />
        <button type="submit">Iniciar Corrida</button>
      </form>
    </Container>
  );
}

export default App;
