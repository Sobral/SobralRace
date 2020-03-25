const KeyboardListener = () => {
  const observers = [];

  function subscribe(observerAction) {
    observers.push(observerAction);
  }

  function notifyAll(data) {
    for (const observerAction of observers) {
      observerAction(data);
    }
  }

  window.addEventListener('keydown', event => {
    event.preventDefault();
    const data = {
      keyPressed: event.key,
    };
    notifyAll(data);
  });

  return subscribe;
};

export const subscribe = KeyboardListener();
