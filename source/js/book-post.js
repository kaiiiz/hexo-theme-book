// add figcaption under image
document.querySelectorAll('img').forEach(function(img){
  if(img.getAttribute('alt')) {
    let parent = img.parentNode;
    let figcaption = document.createElement('figcaption');
    figcaption.innerHTML = img.getAttribute('alt');
    parent.appendChild(figcaption);
  }
})

// add table wrapper
document.querySelectorAll('.book-post > table').forEach(function(table){
  let parent = table.parentNode;
  let wrapper = document.createElement('div');
  wrapper.className = 'table-wrapper'
  parent.insertBefore(wrapper, table);
  wrapper.appendChild(table);
})