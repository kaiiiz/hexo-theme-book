/* global hexo */

'use strict';

var merge = require('./merge');

hexo.on('generateBefore', function() {
  if (hexo.locals.get) {
    var data = hexo.locals.get('data');
    /**
     * Merge configs from _data/book.yml into hexo.theme.config.
     * If `override`, configs in book.yml will rewrite configs in hexo.theme.config.
     * If book.yml not exists, merge all `theme_config.*` into hexo.theme.config.
     */
    if (data && data.book) {
      if (data.book.override) {
        hexo.theme.config = data.book;
      } else {
        merge(hexo.config, data.book);
        merge(hexo.theme.config, data.book);
      }
    } else {
      merge(hexo.theme.config, hexo.config.theme_config);
    }
  }
});