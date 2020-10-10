/* global hexo */

'use strict';

var ejs = require('ejs');

var menu_file, home_file;

// before_post_render

hexo.extend.filter.register('before_post_render', function (data) {
  // preprocess markdown file
})

// after_post_render

hexo.extend.filter.register('after_post_render', function (data) {
  // checkbox in list
  let checkbox_pattern = /<li>([\s]*)<input type="checkbox" id="(\w*)"(>| checked="true">| checked>)/g;
  let checkbox_replacement = "<li class=\"checkbox-item\">$1<input type=\"checkbox\" id=\"$2\"$3";
  data.content = data.content.replace(checkbox_pattern, checkbox_replacement);
  return data;
})

// before_generate (prepare home file and menu file)

hexo.extend.filter.register('before_generate', function () {
  var menu_path = hexo.theme.config.menu_page;
  var home_path = hexo.theme.config.home_page;
  var pages = hexo.locals.get('pages');

  pages = pages.filter(function (page) {
    if (page.source === menu_path) {
      menu_file = page;
      return false;
    }
    else if (page.source === home_path) {
      home_file = page;
      return false;
    }
    return true;
  })

  hexo.locals.set('pages', function () {
    return pages;
  });
});

// generator

hexo.extend.generator.register('home', function(locals) {
  return {
    path: 'index.html',
    data: home_file,
    layout: ['index']
  };
});

// after_generate

// renderer

hexo.extend.renderer.register('ejs', 'html', function(data, options){
  options.filename = data.path;
  options.menu = menu_file ? menu_file.content : '';
  return ejs.render(data.text, options);
}, true);
