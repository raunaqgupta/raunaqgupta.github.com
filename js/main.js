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

	//css-3d transform - title
	$("#header_container").on("mousemove", function(e){
	  var midX =  $(this).width() / 2;
	  var midY = $(this).height() / 2;
	  var relX = e.pageX - $(this).offset().left;
	  var relY = e.pageY - $(this).offset().top;
	  var degY = Math.max(Math.min(relX - midX, 30), -30);
	  var degX = Math.max(Math.min(relY*0.5 - midY, 20), -20);
	  $(this).find("#name").css("transform", "perspective(400px) rotateY(" + degY + "deg) rotateX(" + degX + "deg)");
	  $(this).find("#name").css("-webkit-transform", "perspective(400px) rotateY(" + degY + "deg) rotateX(" + degX + "deg)");
	});

	//css-3d undo
	$("#header_container").on("mouseout", function(e){
		$(this).find("#name").css("transform", "perspective(0px) rotateY(0deg) rotateX(0deg)");
		$(this).find("#name").css("-webkit-transform", "perspective(0px) rotateY(0deg) rotateX(0deg)");
	});
});

