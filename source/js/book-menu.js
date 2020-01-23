function collapse(name, body, i) {
    var accordion = document.createElement('div');
    accordion.setAttribute("class", "accordion");
    
    body.classList.add('accordion-body');
    
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
    accordion.appendChild(body);

    name.parentNode.replaceChild(accordion, name);

    return accordion;
}

document.querySelectorAll('.book-menu > ul').forEach((e, idx) => {
    var sibling = e.previousElementSibling
    while (sibling != null) {
        if (sibling.tagName == "H1" || sibling.tagName == "H2" ||
            sibling.tagName == "H3" || sibling.tagName == "H4" ||
            sibling.tagName == "H5" || sibling.tagName == "H6") {
            break;
        }
        sibling = sibling.previousElementSibling
    }
    // e is collapsable
    if (sibling) {
        // e.classList.add('book-nav-collapsable')
        accordion = collapse(sibling, e, idx);
        accordion.classList.add('border')
    }
})

document.querySelectorAll('.book-menu ul').forEach((e) => {
    e.classList.add('book-nav')
})

document.querySelectorAll('.book-menu li').forEach((e) => {
    e.classList.add('book-nav-item')
})