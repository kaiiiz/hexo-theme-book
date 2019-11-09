// add figcaption under image
document.querySelectorAll('img').forEach(function(img){
  if(img.getAttribute('alt')) {
    let parent = img.parentNode;
    let figcaption = document.createElement('figcaption');
    figcaption.innerHTML = img.getAttribute('alt');
    parent.insertBefore(figcaption, img.nextSibling);
  }
})

// add table wrapper
document.querySelectorAll('.book-post > table, li > table').forEach(function(table){
  let parent = table.parentNode;
  let wrapper = document.createElement('div');
  wrapper.className = 'table-wrapper'
  parent.insertBefore(wrapper, table);
  wrapper.appendChild(table);
})

// add footnotes tooltips
document.querySelectorAll('sup.footnote-ref').forEach(function(fn){
  let parent = fn.parentNode;
  let wrapper = document.createElement('span');
  let link = fn.childNodes[0].getAttribute("href")  // #fn1
  link = link.substr(1, link.length)                // fn1
  let fn_content = document.getElementById(link).innerText.replace(/↩/g, '')
  wrapper.className = 'tooltip'
  wrapper.setAttribute("data-tooltip", fn_content)
  parent.insertBefore(wrapper, fn);
  wrapper.appendChild(fn);
})