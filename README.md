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

```yml
home_page: home.md # filename under /source/_posts/
menu:
  - name: home
    link: /
    groupof:
    - name:
      link:

lightgallery: false
disqus_shortname: 
```

### Preparation

For smoothly updating, I recommand to create a config file named `book.yml` in `/source/_data` folder (If it doesn't exist, create one)

> **Notice: source folder is under your hexo work directory, not the theme one!**

Copy the contents of `/themes/book/_config.yml` to `/source/_data/book.yml`, the theme will auto replace the contents of config. Now you can configure it by yourself and you can update theme smoothly.

### Config

The detail of config, see [Configuration](https://github.com/kaiiiz/hexo-theme-book/wiki/Configuration)

## Post front-matter

```
---
title: <string>
disqus: <boolean> (default: true)
lightgallery: <boolean> (default: true)
---
```

## Update

Jump into the theme folder, run `git pull`.

## TODOs

* [ ] tooltips
* [ ] local search
* [ ] code copy
* [ ] responsive layout
* [ ] footer