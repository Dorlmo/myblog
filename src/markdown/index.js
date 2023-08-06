import MarkdownIt from 'markdown-it';
import MarkdownItAnchor from 'markdown-it-anchor'
import HighLight from 'markdown-it-highlightjs'

export const CefresMD =
    new MarkdownIt({
        html: true,
        langPrefix: 'language-'
    }).use(HighLight)
        .use(MarkdownItAnchor)