import MarkdownIt from 'markdown-it';

export const imageURL = (md: MarkdownIt) => {
  md.renderer.rules.image = function (tokens, idx, _options, env, _self) {

    const token = tokens[idx];

    const src: string | null = token.attrGet('src');
    const alt: string = token.content;

    if (src) {
      return `<img class="lazyload" data-src="${src}" alt="${alt}" />`;
    }
    return '';
  };
}

/*
export const imageURL = (md: MarkdownIt) => {
  md.renderer.rules.image = function (tokens, idx, _options, env, _self) {

    const token = tokens[idx];

    let src: string | null = token.attrGet('src');
    const alt: string = token.content;

    if (src && env.path) {
      src = decodeURIComponent(src);
      if (!isAbsolute(src)) {
        if (isURL(src))
          return `<img class="lazyload" data-src="${src}" alt="${alt}" />`;
        else src = join(dirname(env.path), src);
      }

      if (fileReachable(src)) {
        const newName = nanoid();
        generateNewImage(src, newName);
        return `<img class="lazyload" data-src="${join(baseURL, 'assets', newName + '.webp')}" alt="${newName}" />`;
      }
      else {
        console.log(`file:${src} not reachable`);
        return '';
      }

    }
    return '';
  };
} 
*/