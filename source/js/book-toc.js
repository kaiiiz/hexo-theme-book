tocbot.init({
    tocSelector: '.book-tocbot',
    contentSelector: '.book-post',
    headingSelector: 'h1, h2, h3, h4, h5',
    collapseDepth: 2,
    orderedList: false,
    scrollSmooth: false,
});

function expand_toc() {
    var b = document.querySelector(".book-toc-expand");
    tocbot.init({
        tocSelector: '.book-tocbot',
        contentSelector: '.book-post',
        headingSelector: 'h1, h2, h3, h4, h5',
        collapseDepth: 6,
        orderedList: false,
        scrollSmooth: false,
    });
    b.setAttribute("onclick", "collapse_toc()");
    b.innerHTML = "Collapse all"
}

function collapse_toc() {
    var b = document.querySelector(".book-toc-expand");
    tocbot.init({
        tocSelector: '.book-tocbot',
        contentSelector: '.book-post',
        headingSelector: 'h1, h2, h3, h4, h5',
        collapseDepth: 2,
        orderedList: false,
        scrollSmooth: false,
    });
    b.setAttribute("onclick", "expand_toc()");
    b.innerHTML = "Expand all"
}

function go_top() {
    window.scrollTo(0, 0);
}

function go_bottom() {
    window.scrollTo(0, document.body.scrollHeight);
}

// post metadata
window.onscroll = () => {
    var scrollY = window.scrollY;
    var menu = document.querySelector('.book-menu');
    var meta = document.querySelector('.book-post-meta');
    var tocbot = document.querySelector('.book-tocbot');
    var thold = menu.offsetTop + menu.offsetHeight;
    if (meta == null) {
        tocbot.style.maxHeight = "450px"
    }
    else if (scrollY > thold) {
        meta.classList.add('hide')
        tocbot.style.maxHeight = "450px"
    }
    else {
        meta.classList.remove('hide')
        tocbot.style.maxHeight = "350px"
    }
}