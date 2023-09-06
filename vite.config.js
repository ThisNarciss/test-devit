import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default {
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        git: 'git.html',
        flexLayout: 'flex-layout.html',
        gridLayout: 'grid-layout.html',
        animation: 'animation.html',
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(`${__dirname}/src`, 'partials'),
    }),
  ],
};
