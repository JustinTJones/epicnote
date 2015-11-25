// this is the javascript file to manipulate the text
$( document ).ready ( function () {
	console.log('V 0.0.0.7');

	$(".styleBtn").click(function () {
		// function runs whenever any of the style buttons are clicked
		// will have to call other fuctions to modify the text
		// $(this) is the jquery object referencing the clicked element (buttons as divs in this case)
		console.log($(this).attr('value'));
		// use jquery .wrap to wrap either tags or styled spans around selected text
		$( this ).toggleClass('activeBtn');
	});

});
