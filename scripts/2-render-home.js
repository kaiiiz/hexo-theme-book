/* global hexo */

'use strict';

hexo.extend.generator.register('home', function(locals) {
  var home = hexo.theme.config.home_page;
  var home_file;
  locals.pages.forEach(function(page) {
    if(page.source === home) {
      home_file = page;
    }
  });
  return {
    path: 'index.html',
    data: home_file,
    layout: ['index']
  };
});