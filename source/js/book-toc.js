tocbot.init({
    tocSelector: '.book-tocbot',
    contentSelector: '.book-content',
    headingSelector: 'h1, h2, h3, h4, h5',
    collapseDepth: 2,
    orderedList: false,
    scrollSmooth: false,
})

function expand_toc() {
    var b = document.querySelector(".book-toc-expand")
    tocbot.init({
        tocSelector: '.book-tocbot',
        contentSelector: '.book-content',
        headingSelector: 'h1, h2, h3, h4, h5',
        collapseDepth: 6,
        orderedList: false,
        scrollSmooth: false,
    })
    b.setAttribute("onclick", "collapse_toc()")
    b.innerHTML = "Collapse all"
}

function collapse_toc() {
    var b = document.querySelector(".book-toc-expand")
    tocbot.init({
        tocSelector: '.book-tocbot',
        contentSelector: '.book-content',
        headingSelector: 'h1, h2, h3, h4, h5',
        collapseDepth: 2,
        orderedList: false,
        scrollSmooth: false,
    })
    b.setAttribute("onclick", "expand_toc()")
    b.innerHTML = "Expand all"
}

function go_top() {
    window.scrollTo(0, 0)
    setTimeout(update_maxHeight, 150) // wait animation
}

function go_bottom() {
    window.scrollTo(0, document.body.scrollHeight)
    setTimeout(update_maxHeight, 150) // wait animation
}

function get_maxHeight() {
    let meta = document.querySelector('.book-post-meta')
    let tocbot_menu = document.querySelector('.book-tocbot-menu')

    let meta_pos = (meta == null) ? new DOMRect(0, 0, 0, 0) : meta.getBoundingClientRect()
    let tocbot_menu_pos = (tocbot_menu == null) ? new DOMRect(0, 0, 0, 0) : tocbot_menu.getBoundingClientRect()

    let screenHeight = window.innerHeight
    let maxHeight = screenHeight - meta_pos.y - meta_pos.height - tocbot_menu_pos.height - screenHeight * 0.15

    return maxHeight
}

function update_maxHeight() {
    let scrollY = window.scrollY
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

window.addEventListener('load', () => {
    let tocbot = document.querySelector('.book-tocbot')
    let maxHeight = get_maxHeight()
    tocbot.style.maxHeight = maxHeight + "px"
})
window.addEventListener('resize', update_maxHeight)
window.addEventListener('scroll', update_maxHeight)