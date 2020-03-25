import styled from 'styled-components';

export const Car = styled.div`
  position: absolute;
  top: 600px;
  width: 200px;
  height: 200px;
  background-image: url('assets/car/car.png');
  background-size: cover;
  background-position: 0 0;
  left: ${props => {
    const valor = `${props.position}px`;
    return valor;
  }};
`;
