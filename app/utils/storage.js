function saveState(state) {
  chrome.storage.local.set({ state: JSON.stringify(state) });
}

// films unmarked count
function setBadge(films) {
  if (chrome.browserAction) {
    const count = films.filter(film => !film.marked).length;
    chrome.browserAction.setBadgeText({ text: count > 0 ? count.toString() : '' });
  }
}

export default function () {
  return next => (reducer, initialState) => {
    const store = next(reducer, initialState);
    store.subscribe(() => {
      const state = store.getState();
      saveState(state);
      setBadge(state.films);
    });
    return store;
  };
}
