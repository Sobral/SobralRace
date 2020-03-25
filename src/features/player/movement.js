export default function handleMovement(player) {
  function handleKeyDown(e) {
    const mapKeyMovement = {
      a: () => console.log('A clicado'),
      s: () => console.log('S clicado'),
      d: () => console.log('D clicado'),
      ArrowDown: () => console.log('BAIXO clicado'),
      ArrowRight: () => console.log('DIREITA clicado'),
      ArrowLeft: () => console.log('ESQUERDA clicado'),
    };

    const moveFunction = mapKeyMovement[e.key];

    if (moveFunction) {
      moveFunction();
    }
  }

  window.addEventListener('keydown', e => {
    handleKeyDown(e);
  });

  return player;
}
