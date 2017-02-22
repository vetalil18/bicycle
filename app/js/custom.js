$(document).ready(function(){
  $('.headerSlider').slick();
});

$('.option').selectmenu({
	width: 140
});

var open = document.querySelector('.openNav');
var close = document.querySelector('.closeNav');
var mainNav = document.querySelector('.mainNav');

open.addEventListener('click', function(e) {
	e.preventDefault();
	mainNav.style.display = 'block';

	var a = open.classList.toggle("openNav");
	open.classList.toggle('closeNav');

	if(a == true) {
		mainNav.style.display='none';
	} else {
		mainNav.style.display = 'block';
	}
	
	
});