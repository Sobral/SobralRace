import store from '../../services/store';
import { MOVE } from '../../services/constants';

export default function handleMovement(player) {
  function handleKeyDown(e) {
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

    const moveFunction = mapKeyMovement[e.key];

    if (moveFunction) {
      store.dispatch({
        type: 'MOVE_PLAYER',
        payload: {
          position: checkBoundary(moveFunction()),
        },
      });
    }
  }

  window.addEventListener('keydown', e => {
    handleKeyDown(e);
  });

  return player;
}
