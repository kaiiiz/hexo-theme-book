# hexo-theme-book

## Installation

```
git clone https://github.com/kaiiiz/hexo-theme-book.git themes/book
```

If you don't have scss renderer, follow this:

```
npm install hexo-renderer-scss --save
```

Modify `theme` entry in `_config.yml`

```
theme: book
```

## Change markdown renderer

For better render quality, I suggest that you should change the default renderer.

The detail, see [change markdown renderer](https://github.com/kaiiiz/hexo-theme-book/wiki/Change-markdown-renderer)

## Katex support

For Katex support, please follow the instruction above to change your renderer to `hexo-renderer-markdown-it`, after that, see [katex support](https://github.com/kaiiiz/hexo-theme-book/wiki/Katex-support)

## Configuration

The detail of config, see [Configuration](https://github.com/kaiiiz/hexo-theme-book/wiki/Configuration)

### Smooth Update

For smoothly updating, I recommand to create a config file named `book.yml` in `/source/_data` folder (If it doesn't exist, create one)

> **Notice: source folder is under your hexo work directory, not the theme one!**

Copy the contents of `/themes/book/_config.yml` to `/source/_data/book.yml`, it will replace the contents of config in `/themes/book/_config.yml`. Now you can configure it independently and also, you can update theme more smoothly.

## Post front-matter

```
---
title: <string>
comments: <boolean> (default: true)
zoom_image: <boolean> (default: true)
---
```

## Update

Jump into the theme folder, run `git pull`. If you use `/source/_data/book.yml`, please note the diffrence of updated `_config.yml`.