// add figcaption under image
document.querySelectorAll('img').forEach(function(img){
  if(img.getAttribute('alt')) {
    let parent = img.parentNode;
    let figcaption = document.createElement('figcaption');
    figcaption.innerHTML = img.getAttribute('alt');
    parent.appendChild(figcaption);
  }
})