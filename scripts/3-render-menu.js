/* global hexo */

'use strict';

var ejs = require('ejs');

var menufile;

hexo.on('generateAfter', function () {
  var menu = hexo.theme.config.menu_page;
  var posts = hexo.locals.get('posts')
  posts.forEach(function(post){
    if(post.source === "_posts/" + menu) {
      menufile = post;
    }
  })
})

hexo.extend.renderer.register('ejs', 'html', function(data, options){
  options.filename = data.path;
  options.sidebar = menufile ? menufile.content : '';
  return ejs.render(data.text, options);
}, true);