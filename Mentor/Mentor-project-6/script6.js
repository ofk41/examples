var tooltip = document.querySelector('#nav-links')
var popap = document.querySelector('.popap-wrapper')

tooltip.addEventListener('click', function() {
  if (popap.classList.contains('active')) {
    popap.classList.remove('active');
  } else {
    popap.classList.add('active');
  }
  
});
