import React from 'react';
import { connect } from 'react-redux';

import handleMovement from './movement';

import { Car } from './style';

function Player(props) {
  const { position } = props;
  return <Car position={position} />;
}
const mapStateToProps = state => ({
  ...state.player,
});

export default connect(mapStateToProps)(handleMovement(Player));
