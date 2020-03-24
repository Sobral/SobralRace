import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Container } from './style';

function Main(props) {
  const [emptyInput, setEmptyInput] = useState(true);
  const [newInput, setNewInput] = useState('');
  const [input, setInput] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (!emptyInput) {
      setInput(newInput);
      setNewInput('');
      setEmptyInput(true);
      props.history.push('/game');
    }
  };

  const handleChange = event => {
    const text = event.target.value;
    // Checks if the input is empty

    const isInputEmpty = text.trim().length === 0;

    setEmptyInput(isInputEmpty);
    setNewInput(text);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="playerName"
          placeholder="Nome"
          autoComplete="off"
          onChange={handleChange}
          value={newInput}
        />
        <button type="submit">Iniciar Corrida</button>
      </form>
    </Container>
  );
}

export default withRouter(Main);
