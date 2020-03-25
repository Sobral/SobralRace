import React from 'react';

import handleMovement from './movement';

import { Car } from './style';

function Player() {
  return <Car />;
}

export default handleMovement(Player);
