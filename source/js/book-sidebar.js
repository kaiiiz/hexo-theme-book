// collapse sidebar
var i = 0;
document.querySelectorAll('.book-sidebar > .sidebar-content > ul > li > ul > li').forEach(function(li){
    var ul = li.querySelector('ul');
    if(ul){
        var accordion = document.createElement('div');
        accordion.setAttribute("class", "accordion");

        var checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", "accordion-" + i);
        checkbox.setAttribute("hidden", "");
            
        var label = document.createElement('label');
        label.setAttribute("class", "accordion-header c-hand");
        label.setAttribute("for", "accordion-" + i);
        var icon = document.createElement('i');
        icon.setAttribute("class", "icon icon-caret");
        label.appendChild(icon);

        var acco_body = document.createElement('div');
        acco_body.setAttribute("class", "accordion-body")
        acco_body.appendChild(ul);

        accordion.appendChild(checkbox);
        accordion.appendChild(acco_body);
        li.appendChild(label);
        li.appendChild(accordion);
        i++;
    }
})

// highlight current tab
document.querySelectorAll('.sidebar-content a').forEach(function(item){
    if(item.href === window.location.href || item.href === window.location.href.slice(0, -1)) {
        item.className = "book-sidebar-current";
        var parent = item.parentNode;
        while(parent.className != "sidebar-content") {
            if(parent.className == "accordion") {
                break;
            }
            parent = parent.parentNode;
        }
        if(parent.className == "accordion") {
            parent.querySelector('input').setAttribute("checked", "");
        }
    }
})

document.getElementsByClassName("sidebar-content")[0].style.display = "block";