<p align="center" class="has-mb-6">
<img height="90" src="https://kaiiiz.github.io/hexo-theme-book-demo/images/logo.png">
<br>A simple, elegant, book-like hexo theme with some useful features.
<br>
</p>

![book-preview](https://kaiiiz.github.io/hexo-theme-book-demo/images/header.png)

## 💿 Installation

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

### Change markdown renderer

For better render quality, I suggest that you should change the default renderer.

The detail, see [change markdown renderer](https://github.com/kaiiiz/hexo-theme-book/wiki/Change-markdown-renderer)

## 🎈 Update

Jump into the theme folder, run `git pull`. If you use `/source/_data/book.yml`, please note the diffrence of updated `_config.yml`.

### Smooth Update

For smoothly updating, I recommand to create a config file named `book.yml` in `/source/_data` folder (If it doesn't exist, create one)

> **Notice: source folder is under your hexo working directory, not the theme one!**

Copy the contents of `/themes/book/_config.yml` to `/source/_data/book.yml`, it will replace the contents of config in `/themes/book/_config.yml`. Now you can configure it independently and also, you can update theme more smoothly.

## ⚒ Configurations

The detail of config, see [Configurations](https://github.com/kaiiiz/hexo-theme-book/wiki/Configuration)

## 🎁 Features

**External Library Integration:**

Comments system:

* [utterances](https://github.com/utterance/utterances)
* [disqus](https://disqus.com/)
* [gitalk](https://github.com/gitalk/gitalk)

Others:

* [zooming](https://github.com/kingdido999/zooming)
* [google analytics](https://analytics.google.com/)

**Code Syntax Highlight:**

Using the built-in systax highlight system ([highlight.js](https://highlightjs.org/)) supported from hexo itself, so no other configuration is needed.

However, there are multiple themes integrated from [tomorrow-theme](https://github.com/chriskempson/tomorrow-theme). You can change the theme in `_config.yml`.

| Normal | Night | Night Eighties | Night Blue | Night Bright
| --- | --- | --- | --- | --- | 
| ![](https://github.com/ChrisKempson/Tomorrow-Theme/raw/master/Images/Tomorrow.png) | ![](https://github.com/ChrisKempson/Tomorrow-Theme/raw/master/Images/Tomorrow-Night.png) | ![](https://raw.githubusercontent.com/ChrisKempson/Tomorrow-Theme/master/Images/Tomorrow-Night-Eighties.png) | ![](https://raw.githubusercontent.com/ChrisKempson/Tomorrow-Theme/master/Images/Tomorrow-Night-Blue.png) | ![](https://raw.githubusercontent.com/ChrisKempson/Tomorrow-Theme/master/Images/Tomorrow-Night-Bright.png)

**Powerful and Fully-Customized Sidebar Menu:**

Checkout [Menu Realtime Demo](https://kaiiiz.github.io/hexo-theme-book-demo/demo/menu-realtime/)

**Responsive Layout:**

Book will adapt to different viewpoints in order to give you the best reading experience.

![](https://kaiiiz.github.io/hexo-theme-book-demo/images/responsive.png)

