// Const

let navButtonEl = document.querySelector('.nav-button');

$('.nav_button').click(function (e) {
	$('.modal').addClass('active');
	e.preventDefault();
});

$('.modal').click(function (e) {
	$('.modal').removeClass('active');
	e.preventDefault();
});

// Lets
// Class/objects
// Doms
// Function
