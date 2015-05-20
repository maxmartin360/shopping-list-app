$(document).ready(function () {
//validate the box, if nothing entered show error message

//add value to list
	$('#add-items').keydown(function(e) {
		
		if (e.which == 13) {
			$('#list-area').prepend('<li class="item"><span id="cross-off"></span>'+ $('#add-items').val() + '<span id="delete"></span></li>')
			$('#add-items').val('');
		} else {
			if ($('#list-area').val().length == 0 );
			alert('please enter a value');
		};

	});
//Change class when user clicks done button
	$('ul').on('click','#cross-off', function() {
		alert('this is being clicked')
		$(this).closest('li').css({
			'text-decoration': 'line-through',
			'color':'#898989',
		});
		//$('#cross-off').css({
		//'background-url''(http://i.imgur.com/dbRCAoT.png)',
		//});
		
	});
	//remove li when user hits x
	$('ul').on('click','#delete', function() {
		alert('you clicked delete')
		$(this).closest('li').remove();

	})
	
});


/* future ideas */
/*remove all list ittems at once*/
/*save list temporarily*/
/*add an onclick function to js for saved */
/*add onclick function to js for recipies */