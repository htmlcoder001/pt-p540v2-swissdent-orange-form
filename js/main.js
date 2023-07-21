jQuery(document).ready(function($) {
	
	$('a, button').attr('onFocus', 'if(this.blur)this.blur()');
	
	$('IMG[data=src]').each(function() {
		$(this).addClass('lazy');
	});
	
	/*$('.gallery A').fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});*/
	
	$('.article-section P IMG').each(function() {
		var alt_text = $(this).attr('alt');
		
		if(alt_text.length > 0) {
			$(this).parent().append('<span class="caption">' + alt_text + '</span>');
		}
	});
	
	$('.submenu .top_articles.first_top_articles').show();
	
	$('.submenu LI').hoverIntent(function() {
		var data_id = $(this).find('A').data('id');
		
		$('.submenu .top_articles').hide();
		$('.submenu #top_articles_' + data_id).stop(true, false).fadeIn(500);
	}, function() {
		$('.submenu .top_articles').hide();
		$('.submenu .top_articles.first_top_articles').stop(true, false).fadeIn(500);
	});
	
	$(document).on('click', '.article-link-box.grid-boxes-box', function() {
		var _url = $(this).data("url");
							
		if($(window).width() > 480) {
			window.open(_url);
		} else {
			window.location = _url;
		}
							
		return false;
	});
	
	$(document).on('click', '.article-link-box.image-grid__image', function() {
		var _url = $(this).data("url");
							
		if($(window).width() > 480) {
			window.open(_url);
		} else {
			window.location = _url;
		}
							
		return false;
	});
	
	$(document).on('click', '.gallery_tag A.point', function() {
		if($(this).hasClass('active')) {
			$(this).parent().find('.gallery-tag-content').fadeOut();
			
			$(this).removeClass('active');
		} else {
			$(this).parent().find('.gallery-tag-content').fadeIn();
			
			$(this).addClass('active');
		}
	});
	
	$(document).on('click', '.gallery_tag A.point-close', function() {
		$(this).parent().parent().find('A.point').trigger('click');
	});
	
	$("#accordion").accordion({
		heightStyle: "content"
	});
	
	// Hamburger Icon
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
		
		if($(this).hasClass('open')) {
			$('HEADER NAV').fadeIn();
		} else {
			$('HEADER NAV').fadeOut();
		}
	});
	
	if($(window).width() > 480) {
		$('.main-slider-box IMG').each(function() {
			var src = $(this).data('src');
			
			$(this).attr('src', src);	
		});
	} else {
		$('.main-slider-box IMG').each(function() {
			var src = $(this).data('mobile-src');
			
			$(this).attr('src', src);	
		});
	}
	
	/*$('.filter-box A').click(function() {
		$('.filter-box A').removeClass('active');
		
		$(this).addClass('active');
		
		var _type = $(this).data('filter');
		
		var _url = $(this).parent().parent().data('url');
		var _category = $(this).parent().parent().data('category');
		
		//$('.grid-filtered-content').load('?type=' + _type + '&' + _url);
		
		$.post('?type=' + _type + '&category=' + _category, function(html) {
			console.debug('?type=' + _type + '&' + _url);
			//$('.grid-filtered-content').html(html);
			
			$boxHtml = $(html);
			
			jQuery('.grid-filtered-content').html('');
			
			$(".grid-filtered-content").html($boxHtml);
			
			var myLazyLoad = new LazyLoad( { elements_selector: "img, .lazy" } );
			
			//
			//-------------------------------------//
			// init Masonry
			var $grid = $('.image-grid-2').masonry({
			  itemSelector: 'none', // select none at first
			  columnWidth: '.image-grid__col-sizer',
			  gutter: '.image-grid__gutter-sizer',
			  percentPosition: true,
			  stagger: 30,
			  // nicer reveal transition
			  visibleStyle: { transform: 'translateY(0)', opacity: 1 },
			  hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
			});

			// get Masonry instance
			var msnry = $grid.data('masonry');

			// initial items reveal
			$grid.imagesLoaded( function() {
			  $grid.removeClass('are-images-unloaded');
			  $grid.masonry( 'option', { itemSelector: '.image-grid__item' });
			  var $items = $grid.find('.image-grid__item');
			  $grid.masonry( 'appended', $items );
			});
			
			//-------------------------------------//
			// init Infinte Scroll

			$grid.infiniteScroll({
			    append: '.image-grid__item',
			    outlayer: msnry,
			    status: '.page-load-status',
			    path: ".pagination__next",
			});
			//-------------------------------------//
		});
	});*/
	
	$('.search-button.desktop').click(function() {
		$('.search-form.desktop').fadeIn();
		
		$('.search-form INPUT[type="text"]').focus();
	});
	
	$('.search-button.mobile').click(function() {
		$('.search-form.mobile').fadeIn();
		
		$('.search-form INPUT[type="text"]').focus();
	});
	
	$('.search-form-button.desktop').click(function() {
		$('.search-form.desktop').submit();
	});
	
	$('.search-close-button.desktop').click(function() {
		$('.search-form.desktop').fadeOut();
	});
	
	$('.search-form-button.mobile').click(function() {
		$('.search-form.mobile').submit();
	});
	
	$('.search-close-button.mobile').click(function() {
		$('.search-form.mobile').fadeOut();
	});
	
	var is_submenu_open = false;
	
	$('.overlay').hover(function() {
		$('.submenu').slideUp();
		$('.overlay').fadeOut();
				
		is_submenu_open = false;
		
		$('BODY').css('overflow', 'auto');
	});
	
	$('HEADER NAV UL LI A.has-submenu').hoverIntent({
		over: function() {
			$('HEADER NAV UL LI A').removeClass('hovered');
			
			var data_id = $(this).data('id');
			
			if(is_submenu_open == true) {
				$('.submenu').slideUp();
				$('.overlay').fadeOut();
				
				is_submenu_open = false;
				
				$('BODY').css('overflow', 'auto');
			}
			
			if($(this).hasClass('has-submenu')) {
				$(this).addClass('hovered');
				
				is_submenu_open = true;
				
				$('.submenu#submenu_' + data_id).slideDown();
			
				$('.overlay').fadeIn();
				
				$('BODY').css('overflow', 'hidden');
			}
		},
		out:  function() {
			/*if($('.submenu').is(":hover") == false) {
				$('.submenu').slideUp();
			
				$('.overlay').fadeOut();
			}*/
		},
		//selector: 'li'
	});
	
    var time = 5;
	var $bar,
		$slick,
		isPause,
		tick,
		percentTime;

	  $bar = $('.slider-progress .progress');

	  function startProgressbar() {
		resetProgressbar();
		percentTime = 0;
		isPause = false;
		tick = setInterval(interval, 10);
	  }

	  function interval() {
		if (isPause === false) {
		  percentTime += 1 / (time + 0.1);
		  $bar.css({
			width: percentTime + "%"
		  });
		  if (percentTime >= 100) {
			$slick.slick('slickNext');
			startProgressbar();
		  }
		}
	  }

	 function resetProgressbar() {
		$bar.css({
		  width: 0 + '%'
		});
		clearTimeout(tick);
	}
	  
	$slick = $('.main-slider-items').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.highlights-items',
		autoplay: false,
		dots: false,
		adaptiveHeight: true,
		lazyLoad: 'ondemand',
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
	});
	
	$('.main-slider-items .slick-next, .main-slider-items .slick-prev').click(function() {
		startProgressbar();
	});
	
	startProgressbar();
	
	var slick_arrow_right = ($(window).width() - $('.wrapper').width()) / 2;
	$('.main-slider-items .slick-prev').css('left', slick_arrow_right + 'px');
	$('.main-slider-items .slick-next').css('left', (slick_arrow_right + 50) + 'px');
	
	$(window).resize(function() {
		var slick_arrow_right = ($(window).width() - $('.wrapper').width()) / 2;
		$('.main-slider-items .slick-prev').css('left', slick_arrow_right + 'px');
		$('.main-slider-items .slick-next').css('left', (slick_arrow_right + 50) + 'px');
	});
	
	if($(window).width() > 1280) {
		$('.highlights-items').slick({
			  infinite: true,
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  swipeToSlide: true,
			  dots: false,
			  variableWidth: false,
			  /*asNavFor: '.main-slider-items',*/
			  prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
			  nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
		});
		
		$('.footer-menu-items').slick({
			infinite: true,
			slidesToShow: 7,
			slidesToScroll: 1,
			swipeToSlide: true,
			dots: false,
			arrows: false,
			variableWidth: true
		});
	} else if($(window).width() > 890) {
		$('.highlights-items').slick({
			  infinite: true,
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  swipeToSlide: true,
			  dots: false,
			  variableWidth: false,
			  /*asNavFor: '.main-slider-items',*/
			  prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
			  nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
		});
		
		$('.footer-menu-items').slick({
			infinite: true,
			slidesToShow: 7,
			slidesToScroll: 1,
			swipeToSlide: true,
			dots: false,
			arrows: false,
			variableWidth: true
		});
	} else if($(window).width() > 480) {
		$('.highlights-items').slick({
			  infinite: true,
			  slidesToShow: 2,
			  slidesToScroll: 1,
			  swipeToSlide: true,
			  dots: false,
			  variableWidth: false,
			  /*asNavFor: '.main-slider-items',*/
			  prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
			  nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
		});
		
		$('.footer-menu-items').slick({
			infinite: true,
			slidesToShow: 7,
			slidesToScroll: 1,
			swipeToSlide: true,
			dots: false,
			arrows: false,
			variableWidth: true
		});
	} else {
		$('.highlights-items').slick({
			  infinite: true,
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  swipeToSlide: true,
			  dots: false,
			  variableWidth: true,
			  adaptiveHeight: true,
			  /*asNavFor: '.main-slider-items',*/
			  prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
			  nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
		});
		
		$('.footer-menu-items').slick({
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			swipeToSlide: true,
			dots: false,
			arrows: false,
			variableWidth: true
		});
	}
	
	// Article Read Progress
	 var getMax = function(){
        //return $(document).height() - $(window).height();
		
		return $('.top-header').height() + $('.main-image').height() + $('.readzone').height();
    }
    
    var getValue = function(){
        return $(window).scrollTop();
    }
    
    if('max' in document.createElement('progress')){
        // Browser supports progress element
        var progressBar = $('progress');
        
        // Set the Max attr for the first time
        progressBar.attr({ max: getMax() });

        $(document).on('scroll', function(){
            // On scroll only Value attr needs to be calculated
            progressBar.attr({ value: getValue() });
        });
      
        $(window).resize(function(){
            // On resize, both Max/Value attr needs to be calculated
            progressBar.attr({ max: getMax(), value: getValue() });
        });   
    }
    else {
        var progressBar = $('.progress-bar'), 
            max = getMax(), 
            value, width;
        
        var getWidth = function(){
            // Calculate width in percentage
            value = getValue();            
            width = (value/max) * 100;
            width = width + '%';
            return width;
        }
        
        var setWidth = function(){
            progressBar.css({ width: getWidth() });
        }
        
        $(document).on('scroll', setWidth);
        $(window).on('resize', function(){
            // Need to reset the Max attr
            max = getMax();
            setWidth();
        });
    }
	
	window.addEventListener('popstate', function(event) {
		console.debug('Back');
		window.location.assign("/");
	});
	
	//
	// Menus Fixed Controll
	//
	$(window).scroll(function() {
		var header_height = ($('HEADER').height() + $('.top_banner').height() - 60);
		
		if($(window).width() >= 920) {
			if($(window).scrollTop() > header_height) {
				$('BODY').addClass("fixed");
				$('NAV.top-menu').addClass("fixed");
			}

			if($(window).scrollTop() <= header_height) {
				$('BODY').removeClass("fixed");
				$('NAV.top-menu').removeClass("fixed");
			}

			/*if($(window).scrollTop() <= ($(document).height() - $(window).height() - $('FOOTER .copyright').height() - 50)) {
				$('FOOTER .footer-bottom-content').addClass("fixed");
			} else {
				$('FOOTER .footer-bottom-content').removeClass("fixed");
			}*/
		}
		
		if($(window).scrollTop() == 0) {
			$('BODY').removeClass("fixed");
			$('NAV.top-menu').removeClass("fixed");
		}
		
		/*if(isInView($('.prev_page_link'))) {
			var prev_page_url = $('.prev_page_link').attr('href');
			
			window.history.pushState("Details", "Title", prev_page_url);
		}
		
		if(isInView($('.next_page_link:not(.active)'))) {
			var next_page_id = $('.next_page_link').data('id');
			var next_page_url = $('.next_page_link').attr('href');
			
			window.history.pushState("Details", "Title", next_page_url);
			
			$('.next_page_link').remove();
			
			$('#new_article_' + next_page_id).html('<div class="loader-ellips infinite-scroll-request"><span class="loader-ellips__dot"></span><span class="loader-ellips__dot"></span><span class="loader-ellips__dot"></span><span class="loader-ellips__dot"></span></div><p>&nbsp;</p><p>&nbsp;</p>');

			$.post("?get_page=" + next_page_id, function(data) {
				$('#new_article_' + next_page_id).html(data);
				
				var myLazyLoad = new LazyLoad( { elements_selector: "img, .lazy" } );
			});
		}*/
	});
	
	function in_element(_elem, _elem_2) {
		
		var hT = _elem.offset().top,
		   hH = _elem.outerHeight(),
		   wH = $(window).height(),
		   wS = $(this).scrollTop();
	    if (wS > (hT+hH-wH)){
			$('HEADER NAV UL LI A').removeClass('active');
			$(_elem_2).addClass('active');
	    }
	}
});

function isInView($ele) {
	if($ele.length > 0) {
		var lBound = $(window).scrollTop(),
			uBound = lBound + $(window).height(),
			top = $ele.offset().top,
			bottom = top + $ele.outerHeight(true);

		return (top > lBound && top < uBound)
			|| (bottom > lBound && bottom < uBound)
			|| (lBound >= top && lBound <= bottom)
			|| (uBound >= top && uBound <= bottom);
	} else {
		return false;
	}
}

$(window).load(function() {
	$('IMG').addClass('loaded');
	
	$('SECTION.highlights-section').fadeIn();
});