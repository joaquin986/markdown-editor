// Función de primera clase
export function highlightCodeBlocks(text) {
  return text.replace(/```([\s\S]*?)```/g, (_, code) => {
    return `<pre class="bg-gray-800 text-green-300 p-2 rounded"><code>${code}</code></pre>`;
  });
}
