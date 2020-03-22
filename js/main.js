(function($){
    
    $('.effects-item').click(function() {
        $('.effects-item').removeClass('active-effects');
        $(this).addClass('active-effects');
        var srcActive = '<img src="images/effects-1/effect-1-' + $('.effects-item.active-effects').attr('data-number-effect') + '.png" alt="" />';
        $('.effect-img').html(srcActive);
    }); 
    $('.effects-item2').click(function() {
        $('.effects-item2').removeClass('active-effects2');
        $(this).addClass('active-effects2');
        var srcActive = '<img src="images/effects-2/effect-2-' + $('.effects-item2.active-effects2').attr('data-number-effect') + '.png" alt="" />';
        $('.effect-img2').html(srcActive);
    });    

	$(".fancybox").fancybox({ //data-fancybox-group
        padding: 1,
		helpers: {
			overlay: {
				locked: false
			}
		}
	});    
 	$('.scroll-top').click(function() {
		 $('body,html').animate({scrollTop: 0}, 1500);
	});   
    
    $(document).scroll(function() {
        if ($(window).width() < 1024) {
            $('.top-menu').slideUp(300);
            $('.icon-menu').removeClass('active');           
        }	
       if ($(this).scrollTop() > 1500) {
           //$('header').css({'top': '-150px'});
           $('.header-fixed').css({'top': '0'});
       } else {
           //$('header').css({'top': '0'});
           $('.header-fixed').css({'top': '-150px'});
       }	
       if ($(this).scrollTop() > 300) {
           $('.scroll-top').fadeIn();
       } else {
           $('.scroll-top').fadeOut();
       }
    }); 
    
    //Соберите ваш фотоМастер
    var totalPrice = 0;
    $('.link-option.active').each(function() {
        if ($(this).attr('data-price')) {
            totalPrice = totalPrice + parseInt($(this).attr('data-price'));
        }      
    });
    $('.total-price span').text(totalPrice);
    
    $('.link-option').click(function() {
        $('.option-list').removeClass('parentActive');
        $(this).parent().parent().addClass('parentActive');
        $('.parentActive .link-option').removeClass('active');
        $(this).addClass('active');
        totalPrice = 0;
        $('.link-option.active').each(function() {
            if ($(this).attr('data-price')) {
                totalPrice = totalPrice + parseInt($(this).attr('data-price'));
            }      
        });
        $('.total-price span').text(totalPrice);
    });
    
    // Блок с ефектами
    $('.link-category').click(function() {
        $('.link-category').removeClass('active');
        $(this).addClass('active');
        var srcActive = 'images/effects/img_effect' + $('.link-category.active').attr('data-value') + $('.link-effect.active').attr('data-value') + '.png';
        $('.cont-img img').attr('src', srcActive);
    });
    
    
    $('.link-effect').click(function() {
        $('.link-effect').removeClass('active');
        $(this).addClass('active');
        var srcActive = 'images/effects/img_effect' + $('.link-category.active').attr('data-value') + $('.link-effect.active').attr('data-value') + '.png';
        $('.cont-img img').attr('src', srcActive);
        if ($(window).width() < 1024) {
            $('body,html').animate({scrollTop: $('.effect-block').offset().top - 20}, 500);
        }
    });
    
    $('.small-foto img').click(function() {
        $('.right-b').removeClass('activThis');
        $(this).parent().parent().addClass('activThis');
        var temp = $('.activThis .big-foto img').attr('src');
        $('.activThis .big-foto img').attr('src', $(this).attr('src'));
        $(this).attr('src', temp);
    });
    
    
    // Мобильное меню
 	$('.icon-menu-1').click(function() {
		if ($('.top-menu-1').css('display') == 'none') {
			$('.top-menu-1').slideDown(300);	
			$(this).addClass('active');
		} else {
			$('.top-menu-1').slideUp(300);	
			$(this).removeClass('active');			
		}
	});  
 	$('.icon-menu-2').click(function() {
		if ($('.top-menu-2').css('display') == 'none') {
			$('.top-menu-2').slideDown(300);	
			$(this).addClass('active');
		} else {
			$('.top-menu-2').slideUp(300);	
			$(this).removeClass('active');			
		}
	}); 
 	$('.scroll-top').click(function() {
		 $('body,html').animate({scrollTop: 0}, 1500);
	});   
    
    $(document).scroll(function() {
        if ($(window).width() < 1024) {
            $('.top-menu').slideUp(300);
            $('.icon-menu').removeClass('active');           
        }	
       if ($(this).scrollTop() > 1500) {
           //$('header').css({'top': '-150px'});
           $('.header-fixed').css({'top': '0'});
       } else {
           //$('header').css({'top': '0'});
           $('.header-fixed').css({'top': '-150px'});
       }	
       if ($(this).scrollTop() > 300) {
           //$('.scroll-top').fadeIn();
       } else {
           //$('.scroll-top').fadeOut();
       }
    });   
    
    $('.effect-link:nth-child(1)').click(function() {
        $('.effect-this').removeClass('activeParent');
        $(this).parent().parent().addClass('activeParent');
        $('.activeParent .effect-link').removeClass('active');
        $(this).addClass('active');         
        $(".activeParent .slider-effect").slick( "slickGoTo", 0);
    });    
    $('.effect-link:nth-child(2)').click(function() {
        $('.effect-this').removeClass('activeParent');
        $(this).parent().parent().addClass('activeParent');
        $('.activeParent .effect-link').removeClass('active');
        $(this).addClass('active');         
        $(".activeParent .slider-effect").slick( "slickGoTo", 1);
    });    
    $('.effect-link:nth-child(3)').click(function() {
        $('.effect-this').removeClass('activeParent');
        $(this).parent().parent().addClass('activeParent');
        $('.activeParent .effect-link').removeClass('active');
        $(this).addClass('active');         
        $(".activeParent .slider-effect").slick( "slickGoTo", 2);
    });    
    $('.effect-link:nth-child(4)').click(function() {
        $('.effect-this').removeClass('activeParent');
        $(this).parent().parent().addClass('activeParent');
        $('.activeParent .effect-link').removeClass('active');
        $(this).addClass('active');         
        $(".activeParent .slider-effect").slick( "slickGoTo", 3);
    });    
    $('.effect-link:nth-child(5)').click(function() {
        $('.effect-this').removeClass('activeParent');
        $(this).parent().parent().addClass('activeParent');
        $('.activeParent .effect-link').removeClass('active');
        $(this).addClass('active');         
        $(".activeParent .slider-effect").slick( "slickGoTo", 4);
    });    
    $('.effect-link:nth-child(6)').click(function() {
        $('.effect-this').removeClass('activeParent');
        $(this).parent().parent().addClass('activeParent');
        $('.activeParent .effect-link').removeClass('active');
        $(this).addClass('active');         
        $(".activeParent .slider-effect").slick( "slickGoTo", 5);
    });
    $('.play-button').click(function() {
        if ($(window).width() < 768) {
           $('.pop').css({'top': $(document).scrollTop()});         
        }
        $('.iframe').html(' <iframe src="'+ $(this).attr('data-src-video') +'" allowfullscreen></iframe>');
        $('.pop-video').fadeIn(400);
        $('.pop-bg').fadeIn(400);  
        return false;
    });  
	$('.play-button1').click(function() {
        if ($(window).width() < 768) {
           $('.pop').css({'top': $(document).scrollTop()});         
        }
        $('.iframe').html(' <iframe src="'+ $(this).attr('data-src-video') +'" allowfullscreen></iframe>');
        $('.pop-video').fadeIn(400);
        $('.pop-bg').fadeIn(400);  
        return false;
    }); 
    $('a.download-link').click(function() {
        if ($(window).width() < 768) {
           $('.pop').css({'top': $(document).scrollTop()});  
           $('.pop-order').fadeIn(400);
           $('.pop-bg').fadeIn(400);            
           return false;
        }        
    });    
    $('.pop-bg, .close').click(function() {
        $('.pop').fadeOut(400);
        $('.pop-bg').fadeOut(400);
        $('.iframe').html(' ');
        return false;
    });    
    
    $('.twentytwenty').each(function(){    
        $(this).imagesLoaded( function() {
            var parent = $(this.elements[0]);
            $(".twentytwenty-container", parent).twentytwenty();
        });
    });  
    
    $('.slider-photo').each(function(){    
        $(this).imagesLoaded( function() {
            $(this.elements[0]).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true, 
                arrow: false,
                nextArrow: $('.qqq'),
                prevArrow: $('.qqq'),
                draggable: false,
                swipe: false,
                autoplay: true,
                speed: 1000,
                accessibility: false,
                waitForAnimate: false,
                lazyLoad: 'progressive',                
            });    
        });
    });  

    $('.slider-effect').each(function(){    
        $(this).imagesLoaded( function() {
            $(this.elements[0]).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false, 
                arrow: false,
                nextArrow: $('.qqq'),
                prevArrow: $('.qqq'),
                draggable: false,
                swipe: false,
                autoplay: false,
                speed: 1000,
                accessibility: false,
                waitForAnimate: false,
                lazyLoad: 'progressive',
            }); 

        });
    });  
    
})(jQuery)