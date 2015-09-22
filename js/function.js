$(document).ready(function () {
//validate the box, if nothing entered show error message

//add value to list
	$('#add-items').keydown(function(e) {
		
		if (e.which == 13) {
			if ($('#add-items').val() != ''){
				$('#list-area').prepend('<li class="item"><span id="cross-off"></span>'+ $('#add-items').val() + '<span id="delete"></span></li>')
				$('#add-items').val('');
			} else {
				alert('Please enter a value');
			}
		
		};

	});
//Change class when user clicks done button
	$('ul').on('click','#cross-off', function() {
		
		$(this).closest('li').toggleClass('done');
		
		//$('#cross-off').css({
		//'background-url''(http://i.imgur.com/dbRCAoT.png)',
		//});
		
	});
	//remove li when user hits x
	$('ul').on('click','#delete', function() {
		//alert('you clicked delete')
		$(this).closest('li').remove();

	})
	
});


/* future ideas */
/*remove all list ittems at once*/
/*save list temporarily*/
/*add an onclick function to js for saved */
/*add onclick function to js for recipies */