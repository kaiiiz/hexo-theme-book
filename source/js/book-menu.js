function collapse(name, body, i) {
    if (name.classList.contains('accordion')) {
        var acco_body = name.querySelector('.accordion-body');
        acco_body.appendChild(body);
        return name;
    }

    var accordion = document.createElement('div');
    accordion.setAttribute("class", "accordion");

    var acco_body = document.createElement('div');
    acco_body.setAttribute("class", "accordion-body");
    acco_body.appendChild(body);

    var checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "accordion-" + i);
    checkbox.setAttribute("hidden", "");

    var label = document.createElement('label');
    label.textContent = name.textContent
    label.setAttribute("class", "accordion-header c-hand");
    label.setAttribute("for", "accordion-" + i);

    var icon = document.createElement('i');
    icon.setAttribute("class", "icon icon-arrow-down");
    label.appendChild(icon);

    accordion.appendChild(checkbox);
    accordion.appendChild(label);
    accordion.appendChild(acco_body);

    name.parentNode.replaceChild(accordion, name);
}

// clear invalid syntax
function clear_invalid_syntax() {
    document.querySelectorAll('.book-menu > :not(ul):not(h1):not(h2):not(h3):not(h4):not(h5):not(h6)').forEach((e) => {
        e.parentNode.removeChild(e);
    })
}

// pack accordion
function pack_menu_accordion() {
    document.querySelectorAll('.book-menu > ul').forEach((e, idx) => {
        var sibling = e.previousElementSibling;
        while (sibling != null) {
            if (sibling.tagName == "H1" || sibling.tagName == "H2" ||
                sibling.tagName == "H3" || sibling.tagName == "H4" ||
                sibling.tagName == "H5" || sibling.tagName == "H6") {
                break;
            }
            sibling = sibling.previousElementSibling;
        }
        if (!sibling || sibling.tagName == "H1") {
            e.classList.add('uncollapsible');
        }
        else {
            collapse(sibling, e, idx);
        }
    })
}

// highlight current tab
function highlight_current_tab() {
    document.querySelectorAll('.book-menu a').forEach((item) => {
        if (!item.getAttribute('href')) return // if href has no value
        // normalized url
        let sharp = window.location.href.search('#');
        let url = window.location.href
        if (sharp != -1) {
            url = url.slice(0, sharp);
        }
        if (url.slice(-1) == '/') {
            url = url.slice(0, -1);
        }
        if (item.href === url) {
            item.classList.add('current-tab')
            var parent = item.parentNode;
            while (parent.className != "book-menu") {
                if (parent.className == "accordion") {
                    break;
                }
                parent = parent.parentNode;
            }
            if (parent.className == "accordion") {
                parent.querySelector('input').setAttribute("checked", "");
            }
        }
    })
}

/* ----- onload ----- */

clear_invalid_syntax()
pack_menu_accordion()
highlight_current_tab()

// restore sidebar position after reloading page
window.addEventListener('beforeunload', () => {
    let sidebarPos = document.querySelector('.book-menu').scrollTop
    window.localStorage.setItem('sidebarPos', sidebarPos)
})

if (window.localStorage.sidebarPos) {
    let sidebarPos = window.localStorage.sidebarPos
    document.querySelector('.book-menu').scrollTop = sidebarPos
}