function uuidv4() {
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c =>
    (
      +c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
    ).toString(16),
  );
}

function encriptUser(user: string, password: string) {
  return btoa(`${user}:${password}`);
}

function decriptUser(hash: string) {
  const [user, password] = atob(hash).split(':');
  return {user, password};
}

export {uuidv4, encriptUser, decriptUser};
