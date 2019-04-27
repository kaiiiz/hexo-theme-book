# hexo-theme-book

## Installation

```
$ cd {site}
$ hexo init
$ npm install hexo-renderer-scss --save
$ cd theme/
$ git clone https://github.com/kaiiiz/hexo-theme-book.git
```

Modify `theme` entry in site's `_config.yml`

```
theme: hexo-theme-book
```

## Change markdown renderer

For better render quality, I suggest that you should change the default renderer.

### Uninstall original renderer

First, uninstall the default renderer `hexo-renderer-marked`

```
$ npm uninstall hexo-renderer-marked --save
```

### Install new renderer

Then, install new renderer `hexo-renderer-markdown-it`

```
$ npm install hexo-renderer-markdown-it --save
```

You can also choose to install renderer plugin

```
$ npm install markdown-it-abbr --save
$ npm install markdown-it-container --save
$ npm install markdown-it-deflist --save
$ npm install markdown-it-emoji --save
$ npm install markdown-it-footnote --save
$ npm install markdown-it-imsize --save
$ npm install markdown-it-ins --save
$ npm install markdown-it-mark --save
$ npm install markdown-it-regexp --save
$ npm install markdown-it-sub --save
$ npm install markdown-it-sup --save
$ npm install markdown-it-checkbox --save
```

### Configuration

Finally, add these line in your site's `_config.yml`, remember to modify entries according to your settings.

```
markdown:
  render:
    html: true # Doesn't escape HTML content so the tags will appear as html.
    xhtmlOut: false # Parser will not produce XHTML compliant code.
    breaks: true # Parser produces `<br>` tags every time there is a line break in the source document.
    linkify: true # Returns text links as text.
    typographer: true # Substitution of common typographical elements will take place.
    quotes: '“”‘’' # "double" will be turned into “single”
                   # 'single' will be turned into ‘single’
  plugins:
    - markdown-it-abbr
    - markdown-it-container
    - markdown-it-deflist
    - markdown-it-emoji
    - markdown-it-footnote
    - markdown-it-imsize
    - markdown-it-ins
    - markdown-it-mark
    - markdown-it-regexp
    - markdown-it-sub
    - markdown-it-sup
    - markdown-it-checkbox
  anchors:
    # Minimum level for ID creation. (Ex. h2 to h6)
    level: 1
    # A suffix that is prepended to the number given if the ID is repeated.
    collisionSuffix: 'v'
    # If `true`, creates an anchor tag with a permalink besides the heading.
    permalink: false
    # Class used for the permalink anchor tag.
    permalinkClass: header-anchor
    # The symbol used to make the permalink
    permalinkSymbol: '# '
```
