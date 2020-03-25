const initialState = {
  position: 280,
};

function MovePlayer(action) {
  return { ...action.payload };
}

const mapTypeHandler = {
  MOVE_PLAYER: MovePlayer,
};

const playerReducer = (state = initialState, action) => {
  const handleActions = mapTypeHandler[action.type];

  if (handleActions) {
    return handleActions(action);
  }
  return state;
};

export default playerReducer;
