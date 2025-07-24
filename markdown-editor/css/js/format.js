// Función de orden superior que recibe un callback
export function toggleFormat(selection, callback) {
  return callback(selection);
}

// Callback para negrita
export function bold(text) {
  return text.startsWith('**') && text.endsWith('**')
    ? text.slice(2, -2)
    : `**${text}**`;
}

// Callback para cursiva
export function italic(text) {
  return text.startsWith('*') && text.endsWith('*')
    ? text.slice(1, -1)
    : `*${text}*`;
}
