$(document).ready(function(){
	$('#helpButton').click(function(){
		$('.help').toggle();
	});
	$('#submitItem').click(function(){
		$('<p class="list-item unchecked"></p>').appendTo('#listArea').html( $(inputItems).val() + '<button class="remove">X</div>')
	});
	$("body").on("click", ".list-item", function(){
		$(this).toggleClass("checked unchecked");
	});
	$("body").on("click", ".remove", function(){
		$(this).closest('p').fadeOut(100);
	});
	$('#clearList').click(function(){
		$(".checked").fadeOut(100);
	});
});