function hide_canvas() {
    let sidebar = document.querySelector('.book-sidebar')
    let overlay = document.querySelector('.off-canvas-overlay')
    sidebar.classList.remove('show')
    overlay.classList.remove('show')
}

function open_sidebar() {
    let sidebar = document.querySelector('.book-sidebar')
    let overlay = document.querySelector('.off-canvas-overlay')
    sidebar.classList.add('show')
    overlay.classList.add('show')
}

function sidebar_toggle() {
    let sidebar_toggle = document.querySelector('.sidebar-toggle')
    let sidebar = document.querySelector('.book-sidebar')
    let content = document.querySelector('.off-canvas-content')
    if (sidebar_toggle.classList.contains('extend')) { // show
        sidebar_toggle.classList.remove('extend')
        sidebar.classList.remove('hide')
        content.classList.remove('extend')
    }
    else { // hide
        sidebar_toggle.classList.add('extend')   
        sidebar.classList.add('hide')
        content.classList.add('extend')
    }
}
