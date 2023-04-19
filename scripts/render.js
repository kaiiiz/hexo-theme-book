/* global hexo */

'use strict';

const njk = require('nunjucks');

var menu_file, home_file;

// before_post_render

hexo.extend.filter.register('before_post_render', data => {
  // preprocess markdown file
})

// after_post_render

hexo.extend.filter.register('after_post_render', data => {
  // checkbox in list
  let checkbox_pattern = /<li>([\s]*)(<input type="checkbox" id="\w*"(>| checked="true">| checked>))/g;
  data.content = data.content.replace(checkbox_pattern, '<li class="checkbox-item">$1$2');
  return data;
})

// before_generate

// generator

hexo.extend.generator.register('home', locals => {
  var menu_path = hexo.theme.config.menu_page;
  var home_path = hexo.theme.config.home_page;

  locals.pages.forEach(page => {
    if (page.source === menu_path) {
      menu_file = page;
    }
    else if (page.source === home_path) {
      home_file = page;
    }
  })

  return {
    path: `${home_file}`,
    data: home_file,
    layout: ['index']
  };
});

// after_generate

hexo.extend.filter.register('after_generate', () => {
  hexo.route.remove(home_file.path);
  hexo.route.remove(menu_file.path);
});

// renderer

hexo.extend.renderer.register('njk', 'html', (data, options) => {
  options.filename = data.path;
  options.menu = menu_file ? menu_file.content : '';
  return njk.render(data.text, options);
}, true);