$(document).ready(function(){
	$('#helpButton').click(function(){
		$('.help').toggle();
	});
	$('#submitItem').click(function(){
		if(!$.trim($('#inputItems').val())) {
			alert('You must add a name to the item you are listing before you can list it!');
		}
		else {
			$('<p class="list-item unchecked"></p>').appendTo('#listArea').html( $(inputItems).val() + '<button class="remove">X</div>')
		}
	});
	$('#inputItems').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#submitItem').click();
		};
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