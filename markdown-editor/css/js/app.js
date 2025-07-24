import { toggleFormat, bold, italic } from './format.js';
import { processList, formatListItem } from './lists.js';
import { highlightCodeBlocks } from './blocks.js';

document.getElementById('formatBtn').addEventListener('click', () => {
  const textarea = document.getElementById('editor');
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const selected = textarea.value.slice(start, end);

  const formatted = toggleFormat(selected, bold); // puedes cambiar a italic
  textarea.setRangeText(formatted, start, end, 'end');
});

document.getElementById('previewBtn').addEventListener('click', () => {
  let markdown = document.getElementById('editor').value;

  // Encabezados
  let html = markdown
    .replace(/^###### (.*$)/gim, '<h6>$1</h6>')
    .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Listas numeradas
  const lines = markdown.split('\n');
  const orderedList = processList(lines, formatListItem);
  if (orderedList) {
    html = html.replace(/(^\d+\..*(\n)?)+/gm, orderedList);
  }

  // Bloques de código
  html = highlightCodeBlocks(html);

  document.getElementById('preview').innerHTML = html;
});
