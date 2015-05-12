/*makes enter keystroke work as a submit button for input field*/
function getItem() {
	$('#add-items').keydown(function (enter) {
		if (enter.keyCode == 13) {
			postItem();
		}
	});
}

getItem();

/*Takes returned value from previous function and manipulates it*/
function postItem() {
	var item = $('#add-items').val();
	var work = '<p class="full-width no-strikethrough">'+ xMark +item +checkMark + '</p>';
	$('#list-area').prepend(work);
	$('#add-items').val('');
	$('#list-area p:first-child')
}