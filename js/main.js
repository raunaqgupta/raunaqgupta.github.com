$(document).ready(function(){
	// post back button action
	$(".back-button").attr("onclick", '').click(function(){
		$(".portfolio-post-box").fadeOut("fast", function(){});
	});

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

	// $(".card").on("click", function(){
	// 	$(this).children(".data").toggleClass("visible");
	// });
});

