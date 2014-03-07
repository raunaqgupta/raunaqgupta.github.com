$(document).ready(function(){

	setTimeout(function(){
		$("#brief").text("So Design. Much Code. Wow.");
	}, 5000);

	$(".post-thumbnail, .enlarge_img").attr("onclick", '').click(function(){
		var image_src = $(this).attr("src");
		$("#lightbox").children("img").attr("src", image_src);
		$("#lightbox").toggleClass("visible");
	});

	$("body").on('click', '#lightbox', function(){
		$("#lightbox").toggleClass("visible");
	});

	$(".card_link").on("click", function(e){
		$(".data").removeClass("visible");
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

	$(".close_modal").on("click", function(e){
		var post_data = $(this).parents(".data");
		post_data.toggleClass("visible");
		post_data.find("iframe").each(function(i,e){
			$(this).attr("src", $(this).attr("src"));
		});
		$("#lightroom").toggleClass("visible");
		e.stopPropagation();
	});

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

	$("#header_container").on("mouseout", function(e){
		$(this).find("#name").css("transform", "perspective(0px) rotateY(0deg) rotateX(0deg)");
		$(this).find("#name").css("-webkit-transform", "perspective(0px) rotateY(0deg) rotateX(0deg)");
	});

	$(window).scroll(function(e){
		var window_height = $(window).height();
		var current_scroll = $(window).scrollTop();
		if(current_scroll <= window_height) {
			$("#page_one").css("-webkit-transform", "rotateX(" + current_scroll*100/window_height + "deg)");
		}
	});
});

