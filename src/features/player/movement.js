import store from '../../services/store';
import { MOVE } from '../../services/constants';
import { subscribe } from '../../services/keyboard';

export default function handleMovement(player) {
  function handleKeyDown(data) {
    const oldPosition = store.getState().player.position;

    function checkBoundary(position) {
      if (position >= 0 && position <= 2 * MOVE) {
        return position;
      }
      return oldPosition;
    }
    function MoveRight() {
      return oldPosition + MOVE;
    }

    function MoveLeft() {
      return oldPosition - MOVE;
    }

    function MoveMid() {
      return MOVE;
    }

    const mapKeyMovement = {
      a: MoveLeft,
      s: MoveMid,
      d: MoveRight,
      ArrowDown: MoveMid,
      ArrowRight: MoveRight,
      ArrowLeft: MoveLeft,
    };

    const { keyPressed } = data;
    const moveFunction = mapKeyMovement[keyPressed];

    if (moveFunction) {
      store.dispatch({
        type: 'MOVE_PLAYER',
        payload: {
          position: checkBoundary(moveFunction()),
        },
      });
    }
  }

  subscribe(handleKeyDown);

  return player;
}
