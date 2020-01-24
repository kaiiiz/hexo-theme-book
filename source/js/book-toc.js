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

function get_maxHeight() {
    let meta = document.querySelector('.book-post-meta')
    let tocbot_menu = document.querySelector('.book-tocbot-menu')

    let meta_pos = meta.getBoundingClientRect();
    let tocbot_menu_pos = tocbot_menu.getBoundingClientRect();

    let screenHeight = screen.availHeight;
    let maxHeight = screenHeight - meta_pos.y - meta_pos.height - tocbot_menu_pos.height - screenHeight * 0.3;

    return maxHeight;
}

window.onload = () => {
    let tocbot = document.querySelector('.book-tocbot')
    let maxHeight = get_maxHeight();
    tocbot.style.maxHeight = maxHeight + "px"
}

// post metadata
window.onscroll = () => {
    let scrollY = window.scrollY;
    let meta = document.querySelector('.book-post-meta')
    let tocbot = document.querySelector('.book-tocbot')
    let maxHeight = get_maxHeight()

    if (meta == null) {
        tocbot.style.maxHeight = maxHeight + "px"
    }
    else if (scrollY > 600) {
        meta.classList.add('hide')
        tocbot.style.maxHeight = maxHeight + "px"
    }
    else {
        meta.classList.remove('hide')
        tocbot.style.maxHeight = maxHeight + "px"
    }
}