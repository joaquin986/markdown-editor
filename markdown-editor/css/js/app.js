// HU2: Generar HTML con Regex
document.getElementById('previewBtn').addEventListener('click', () => {
  const markdown = document.getElementById('editor').value;

  // Reemplazo de encabezados
  let html = markdown
    .replace(/^###### (.*$)/gim, '<h6>$1</h6>')
    .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    
    // Listas sin orden
    .replace(/^\* (.*$)/gim, '<ul><li>$1</li></ul>');

  // Combinar múltiples <ul> seguidos
  html = html.replace(/<\/ul>\s*<ul>/gim, '');

  document.getElementById('preview').innerHTML = html;
});

// HU3: Estilo dinámico para encabezados
let contrastOn = false;
document.getElementById('toggleHeaders').addEventListener('click', () => {
  const headers = document.querySelectorAll('#preview h1, #preview h2, #preview h3, #preview h4, #preview h5, #preview h6');

  headers.forEach(h => {
    if (contrastOn) {
      h.style.color = '';
      h.style.backgroundColor = '';
      h.style.padding = '';
    } else {
      h.style.color = 'white';
      h.style.backgroundColor = 'black';
      h.style.padding = '0.2rem 0.5rem';
    }
  });

  contrastOn = !contrastOn;
});
