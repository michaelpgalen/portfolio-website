function menuToggle () {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
// Get the button:
// var topbutton = document.getElementById('topBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() }

function scrollFunction () {
  var topbutton = document.getElementById('topBtn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = 'block';
  } else {
    topbutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).ready(function() {
    // all custom jQuery will go here
    
});
