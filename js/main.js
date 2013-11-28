$(document).ready(function(){

	// thumbnail onclick black room action
	$(".post-thumbnail").attr("onclick", '').click(function(){
		var image_src = $(this).attr("src");
		$("#lightbox").children("img").attr("src", image_src);
		$("#lightbox").toggleClass("visible");
	});

	// hide lightbox
	$("body").on('click', '#lightbox', function(){
		$("#lightbox").toggleClass("visible");
	});

	// show/hide contact box
	$(".contact_me").on('click', function(){
		$(".contact_box").toggleClass("visible");
		$(".contact_info").toggleClass("show");
	});

	// show portfolio piece
	$(".card_link").on("click", function(e){
		var post_data = $(this).parent(".card").children(".data");
		post_data.toggleClass("visible");
		post_data.find("img").each(function(i,e){
			$(this).attr("src", $(this).attr("lazysrc"));
		});
		$("#lightroom").toggleClass("visible");
		var offset = $(this).offset();
		offset.top -= 20;
		$('html, body').animate({
			scrollTop: offset.top
		});
	});

	// close portfolio piece
	$(".close_modal").on("click", function(e){
		var post_data = $(this).parents(".data");
		post_data.toggleClass("visible");
		post_data.find("iframe").each(function(i,e){
			$(this).attr("src", $(this).attr("src"));
		});
		$("#lightroom").toggleClass("visible");
		e.stopPropagation();
	});
});

