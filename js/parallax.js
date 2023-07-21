jQuery(document).ready(function($) {
	$('.parallax').each(function() {
		$(this).data('first-top', parseInt($(this).css('marginTop')) );
	});
	
	$(window).scroll(function() {	
		/*** Parallax ***/
		// parallax init
		var pos = $(window).scrollTop();
		
		$('.parallax.p1').each(function() {
			var firsttop = $(this).data('first-top');
			$(this).css('marginTop', firsttop - (pos*1 ) +'px')
		});

		$('.parallax.p2').each(function() {
			var firsttop = $(this).data('first-top');
			$(this).css('marginTop', firsttop - (pos*0.5 ) +'px')
		});

		$('.parallax.p3').each(function() {
			var firsttop = $(this).data('first-top');
			$(this).css('marginTop', firsttop - (pos*0.25 ) +'px')
		});
	
		/*var window_scroll = $(window).scrollTop() + 500;
		
		var scrolltop = window.pageYOffset; // get number of pixels document has scrolled vertically 
		
		function parallax($obj, coeff) {
			if(window_scroll > $obj.offset().top) {
				var new_top = $obj.offset().top - coeff;

				$obj.css('top', new_top + 'px');
			} else {
				var new_top = $obj.offset().top + coeff;

				$obj.css('top', new_top + 'px');
			}
		}
		
		parallax($('#bg1'), 2);
		parallax($('#bg2'), 1);
		parallax($('#bg3'), 1.5);
		parallax($('#bg4'), 2);
		parallax($('#bg5'), 1);
		parallax($('#bg6'), 1);*/
		
		/*if(window_scroll > $('#bg1').offset().top) {
			var bg1_new_top = $('#bg1').offset().top + 3;

			$('#bg1').css('top', bg1_new_top + 'px');
		} else {
			var bg1_new_top = $('#bg1').offset().top - 3;

			$('#bg1').css('top', bg1_new_top + 'px');
		}
		
		if(window_scroll > $('#bg2').offset().top) {
			var bg2_new_top = $('#bg2').offset().top + 3;

			$('#bg2').css('top', bg2_new_top + 'px');
		} else {
			var bg2_new_top = $('#bg2').offset().top - 3;

			$('#bg2').css('top', bg2_new_top + 'px');
		}
		
		if(window_scroll > $('#bg3').offset().top) {
			var bg3_new_top = $('#bg3').offset().top + 3;

			$('#bg3').css('top', bg3_new_top + 'px');
		} else {
			var bg3_new_top = $('#bg3').offset().top - 3;

			$('#bg3').css('top', bg3_new_top + 'px');
		}*/
	});
});