export const isNullish = (value: any): boolean =>
  value === null || value === undefined;

export const validateEmail = (value: string) => {
  if (isNullish(value)) {
    return false;
  }
  const usuario = value.substring(0, value.indexOf('@'));
  const dominio = value.substring(value.indexOf('@') + 1, value.length);

  if (
    usuario.length >= 1 &&
    dominio.length >= 3 &&
    usuario.search('@') === -1 &&
    dominio.search('@') === -1 &&
    usuario.search(' ') === -1 &&
    dominio.search(' ') === -1 &&
    dominio.search('.') !== -1 &&
    dominio.indexOf('.') >= 1 &&
    dominio.lastIndexOf('.') < dominio.length - 1
  ) {
    return true;
  }
  return false;
};

export const validatePasswordStrength = (value: string) => {
  if (isNullish(value)) {
    return false;
  }
  const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.{8,})/;
  return strongRegex.test(value);
};
