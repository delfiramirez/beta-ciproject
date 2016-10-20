var query = "(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)";
 
if (matchMedia(query)) {
  
} else {
 
}

// Add class on browsers that don't supports flexbox. ES6-ES7

if (!supports.flexbox()) {
  let div = document.createElement('div');
  div.className = 'Error';
  div.innerHTML = `Your browser does not support Flexbox.`;

  document.body.insertBefore(div, document.body.firstChild);
}


