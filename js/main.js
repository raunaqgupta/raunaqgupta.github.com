$(document).ready(function(){

	var window_height = $(window).height();
	var window_width = $(window).width();
	var header_top = $("#header").offset().top - $(window).scrollTop();
	var bgvideo_stop = -(window_height - 40);
	var title_top = 0;
	$("#empty_header").css({"height":window_height});
	$("#header").css({"left":window_width/2 - $("#header").width()/2});

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
		console.log(offset);
		e.stopPropagation();
		$('html, body').animate({
			scrollTop: offset.top - 144
		});
		console.log("EMPTY:" + $("#empty_header").height());
	});

	// close portfolio piece
	$(".close_modal").on("click", function(e){
		$(this).parents(".data").toggleClass("visible");
		$("#lightroom").toggleClass("visible");
		e.stopPropagation();
	});

	//awesome scroll
	$(window).scroll(function(e){
		console.log($("#empty_header").height());
		var v_offset = $("body").scrollTop();
		var cv = (255 - v_offset > 20) ? (255 - v_offset).toString(16) : "0";
		title_top = (header_top - (v_offset*0.9) > 10) ? (header_top - (v_offset*0.9)) : "1em";
		$("#header").css({
			"color":"#"+cv+cv+cv,
			"top":title_top
		});
		var bgvideo_top = (v_offset*-2 > bgvideo_stop) ? (v_offset*-2) : bgvideo_stop+"px";
		$("#bgvideo").css({"top":bgvideo_top});
		$("#empty_header").css({
			"height": (window_height - v_offset*0.5)
		});
	});
});

