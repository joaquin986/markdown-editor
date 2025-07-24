// Función de orden superior para convertir líneas de lista en <li>
export function processList(lines, callback) {
  const items = lines
    .filter(line => /^\d+\.\s+/.test(line))
    .map(callback);

  return items.length > 0 ? `<ol>${items.join('')}</ol>` : null;
}

// Callback para formatear un ítem
export function formatListItem(line) {
  return `<li>${line.replace(/^\d+\.\s+/, '')}</li>`;
}
