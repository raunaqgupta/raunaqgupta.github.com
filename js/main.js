$(document).ready(function(){

	// thumbnail onclick black room action
	$(".post-thumbnail").attr("onclick", '').click(function(){
		var image_src = $(this).attr("src");
		if($("#lightbox").length > 0){
			$("#lightbox").children("#content").children().attr("src", image_src);
			$("#lightbox").show();
		}
		else {
			$('body').append('<div id="lightbox"><div id="content"><img src="' + image_src + '" /></div></div>');
		}
	});

	// hide lightbox
	$("body").on('click', '#lightbox', function(){
		$("#lightbox").hide();
	});

	// show/hide contact box
	$(".contact_me").on('click', function(){
		$(".contact_box").toggleClass("visible");
		$(".contact_info").toggleClass("show");
	});

	// show portfolio piece
	$(".card_link").on("click", function(e){
		$(this).parent(".card").children(".data").toggleClass("visible");
		$("#lightroom").toggleClass("visible");
		var offset = $(this).offset();
		offset.top -= 20;
		$('html, body').animate({
			scrollTop: offset.top
		});
	});

	// close portfolio piece
	$(".close_modal").on("click", function(e){
		$(this).parents(".data").toggleClass("visible");
		$("#lightroom").toggleClass("visible");
		e.stopPropagation();
	});
});

