document.addEventListener('DOMContentLoaded', function() {

var selector; 
var elems; 
var makeActive;

selector = '.nav__link';

elems = document.querySelectorAll(selector);


makeActive = function () {

    for (var i = 0; i < elems.length; i++)
        elems[i].classList.remove('active');
    
    this.classList.add('active');

};

for (var i = 0; i < elems.length; i++)
    elems[i].addEventListener('mousedown', makeActive);

});


/* ----- jQuery ------ */ 

// $(document).ready(function(e) {

// 	$('.nav__link').click(function(e) {
// 		$('.nav__link').removeClass('active');
// 		$(this).addClass('active');
// 	});

// });

// $(document).ready(function() {

// 	$('.nav__link').on('click', function(){
//     	$('.nav__link').removeClass('active');
//     	$(this).addClass('active');
// 	});
// });
