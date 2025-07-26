export class AuthTokenManager {
  #key;
  constructor(key) {
    this.#key = key;
  }
  get() {
    const token = localStorage.getItem(this.#key);
    if (token == null) return null;

    const { exp } = JSON.parse(atob(token.split('.')[1]));
    if (Date.now() > exp * 1000 - 5 * 60 * 1000) {
      this.remove();
      return null;
    }

    return token;
  }
  set(token) {
    localStorage.setItem(this.#key, token);
    for (const listener of this.#listeners) {
      queueMicrotask(() => {
        listener(token);
      });
    }
  }
  remove() {
    for (const listener of this.#listeners) {
      queueMicrotask(() => {
        listener(null);
      });
    }
    return localStorage.removeItem(this.#key);
  }

  #listeners = new Set();
  subscribe(listener) {
    this.#listeners.add(listener);
    return () => {
      this.#listeners.delete(listener);
    };
  }
}
