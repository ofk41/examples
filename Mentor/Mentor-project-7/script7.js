var btn = document.querySelector('.btn')
var rslt = document.querySelector('.rslt')
var emr = document.querySelector('.emr')

btn.addEventListener('click', function() {
   
  if (rslt.classList.contains('active')) {
    rslt.classList.remove('active');
    emr.classList.remove('active');
    // alert('selam')
  } else {
    rslt.classList.add('active');
    emr.classList.add('active');
    // alert('selam1')
  }
});