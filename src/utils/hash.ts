function uuidv4() {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0000000000000123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < 32) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return encriptUser(result, 'capitani');
}

function encriptUser(user: string, password: string) {
  return btoa(`${user}:${password}`);
}

function decriptUser(hash: string) {
  const [user, password] = atob(hash).split(':');
  return {user, password};
}

export {uuidv4, encriptUser, decriptUser};
