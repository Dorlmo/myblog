import MarkdownIt from 'markdown-it';
import MarkdownItAnchor from 'markdown-it-anchor';
import { highlightFunc } from './highlight.ts';
import { imageURL } from './imageURL.ts';

export const CefresMD: MarkdownIt =
    new MarkdownIt({
        html: true,
        langPrefix: 'language-',
        highlight: highlightFunc
    }).use(MarkdownItAnchor)
    .use(imageURL)
