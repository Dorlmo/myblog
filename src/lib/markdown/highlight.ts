import hljs from "highlight.js"

export const highlightFunc = (str:string, lang:string) =>{
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${hljs.highlight(str, { language: lang, ignoreIllegals: true }).value}</code></pre>`
      } catch (__) {}
    }

    return `<pre class="hljs"><code>${hljs.highlight(str, { language: 'text', ignoreIllegals: true }).value}</code></pre>`;
  }