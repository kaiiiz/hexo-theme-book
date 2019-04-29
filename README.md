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
home_page: home # filename under source/_posts/
menu:
  - name:
    link: 
    groupof:
    - name:
      link:
      groupof:
      - name:
        link:

lightgallery: false
disqus_shortname: 
```

### Preparation

For smoothly updating, I recommand to create a config file named `book.yml` in `/source/_data` folder (If it doesn't exist, create one)

> Notice: source folder is under your hexo work directory, not the theme one!

Copy the contents of `/themes/book/_config.yml` to `/source/_data/book.yml`. Now you can configure it by yourself and you can update theme smoothly.

### Home page

This option specified the page you want to render in home page (home page is the `url` specified in `_config.yml`)

The constraint of this option is that the post must located in `source/_post/`

For instance, you want to render `source/_post/dir/post.md` in your home page, you must specified `dir/post` in this option

### Sidebar menu

The markup:

```yml
menu:
  - name:
    link: 
    groupof:
    - name:
      link:
      groupof:
```

#### name

Name of the entry

#### link

The `link` must follow the rule of the `permalink` your specified in `_config.yml`, for convenient, I modified the entry to:

```yml
permalink: :title/
```

It's said that the permalink only contains the `filename` of post.

Or you can just put an url in `link`.

For instance, if I try to put a link: `source/_post/dir/post.md` in sidebar, I have 2 options:

1. `dir/post`
2. `https://{your_site}/dir/post`

> `link` is **optional**, you can leave it empty or just remove it if you don't want to link any page.

#### Groupof

If you want to group some entries, use `groupof` and follow the markup above.

The rule inside `grouopf` is same as outside (use `name, link, groupof`), you can also nested several groups.

### Lightgallery

The result of lightgallery, see [demo](https://kaiiiz.github.io/hexo-theme-book-demo/hexo-unit-test/images/)

## Update

Jump into the theme folder, run `git pull`.

## TODOs

* [ ] tooltips
* [ ] local search
* [ ] code copy
* [ ] responsive layout
* [ ] footer