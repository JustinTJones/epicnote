// this is the javascript file to manipulate the text

		console.log('V 0.0.1.2');
		


//  $( document ).ready ( function txtInit() {
//
// 	$(".styleBtn").click(function styleBtnClick() {
// 		// function runs whenever any of the style buttons are clicked
// 		// will have to call other fuctions to modify the text
// 		// $(this) is the jquery object referencing the clicked element (buttons as divs in this case)
// 		// had to change my button divs to buttons to not change selection in content div to text in button div
// 		$('#mainEditor').focus();
// 		$(this).toggleClass('activeBtn');
// 		console.log($(this).attr('mod'));
//
// 		pasteHtmlAtCaret($(this).attr('mod'));
// 		// use jquery .wrap to wrap either tags or styled spans around selected text
// 	});
//
// 	function pasteHtmlAtCaret(html) {
// 		// This function found at http://gyf1.com/blog/2015/03/07/insert-html-where-cursor-is/
// 		// Author linked to a bunch of StackOverflow questions
// 		// All //// comments are from original source
// 		//
// 		// This code falls short of what I need, but parts can be used
// 		//
// 		// Pulling checks for older IE
// 		// I'm a bad dev because I don't give a shit about IE
//     var sel, range;
//     sel = window.getSelection();
// 		console.log('sel = ' + sel);
//     if (sel.getRangeAt && sel.rangeCount) {
//       range = sel.getRangeAt(0);
//       // range.deleteContents();
//
//       //// Range.createContextualFragment() would be useful here but is
//       //// non-standard and not supported in all browsers (IE9, for one)
//       var el = document.createElement("div");
//       el.innerHTML = html;
//       var frag = document.createDocumentFragment(), node, lastNode;
//       while ( (node = el.firstChild) ) {
//         lastNode = frag.appendChild(node);
//       }
//       range.insertNode(frag);
//
//       //// Preserve the selection
// 			// This part does not work
//       if (lastNode) {
//         range = range.cloneRange();
//         range.setStartAfter(lastNode);
//         range.collapse(true);
//         sel.removeAllRanges();
//         sel.addRange(range);
//       }
//     }
// 	}
//
// });
