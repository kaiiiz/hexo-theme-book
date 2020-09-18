/* global hexo */

'use strict';

var ejs = require('ejs');

var menufile;

hexo.on('generateAfter', function () {
  var menu = hexo.theme.config.menu_page;
  var pages = hexo.locals.get('pages')
  pages.forEach(function(page){
    if(page.source === menu) {
      menufile = page;
    }
  })
})

hexo.extend.renderer.register('ejs', 'html', function(data, options){
  options.filename = data.path;
  options.menu = menufile ? menufile.content : '';
  return ejs.render(data.text, options);
}, true);