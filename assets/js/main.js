(function ($) {
	"use strict";
    jQuery(document).ready(function($){
       
        /*--------------------
            wow js init
        --------------------*/
        new WOW().init();
       
        /*------------------------------
            smoth achor effect
        ------------------------------*/
        $(document).on('click','#primary-menu li a, .nav-btn a, .navbar-brand.logo', function (e) {
            var anchor = $(this).attr('href');
            var link = anchor.slice(0,1);
            if ('#' == link) {
                e.preventDefault();
                var top = $(anchor).offset().top;
                $('html, body').animate({
                    scrollTop: $(anchor).offset().top-70
                }, 1000);
                $(this).parent().addClass('active').siblings().removeClass('active');
            }
           
        });






        // i-Digital Type Style
         $(".typed-from-js").typed({
            strings: ["Services", "Solution", "Work"],
            cursorChar: " ",
            typeSpeed: 200,
            loop: true,
            loopCount: true,
        });


           /*-- 
        Screenshot Active Slider 
    ------------------------------------*/
    var screenshotActiveTwo = $('.screenshot-tow-active');
    screenshotActiveTwo.slick({
        arrows: true,
        autoplay: true,
        dots: true,
        autoplaySpeed: 800,
        infinite: true,
        slidesToShow: 4,
        slidesToScoll: 1,
        prevArrow:false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    /*-- 
        Screenshot Center Active Slider 
    ------------------------------------*/
    var screenshotCenterActive = $('.screenshot-center-active');
    screenshotCenterActive.slick({
        arrows: false,
        autoplay: true,
        dots: true,
        autoplaySpeed: 2000,
        infinite: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 5,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            // {
            //     breakpoint: 1024,
            //     settings: {
            //         slidesToShow: 3,
            //     }
            // },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 3
              }
            },
            {
              breakpoint: 500,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
              }
            }
        ]
    });



     // Our Testimonial
        var testiSlider = $(".testimonial-slider");
        testiSlider.owlCarousel({
            items: 3,
            nav: false,
            dots: true,
            autoplay: false,
            margin: 0,
            autoplaySpeed: 1000,
            smartSpeed: 1000,
            loop: true,
            center: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                500: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                991: {
                    items: 3,
                },
                
                
                
                1200: {
                    items: 3,
                }
            },
            onTranslated: function(e) {
                var total = e.item.count,
                    now = e.item.index,
                    showing = e.page.size;

                $('.item-nav').toggleClass('slide-on-start', now == 0);
                $('.item-nav').toggleClass('slide-on-end', (now + showing) >= total);

            }
        });

        $('.item-nav').on('click', 'a', function() {
            if( $(this).hasClass('arrow-left') ) {
                testiSlider.trigger('prev.owl.carousel');
            } else {
                testiSlider.trigger('next.owl.carousel');
            }
            return false;
        });
        
     
    });

    
    //define variable for store last scrolltop
    var lastScrollTop = '';
    $(window).on('scroll', function () {
        /*---------------------------
            back to top show / hide
        ---------------------------*/
       // var ScrollTop = $('.back-to-top');
       // if ($(window).scrollTop() > 1000) {
       //     ScrollTop.fadeIn(1000);
       // } else {
       //     ScrollTop.fadeOut(1000);
       // }
       /*--------------------------
        sticky menu activation
       ---------------------------*/
        // var st = $(this).scrollTop();
        // var mainMenuTop = $('.navbar-area');
        // if ($(window).scrollTop() > 1000) {
        //     if (st > lastScrollTop) {
        //         // hide sticky menu on scrolldown 
        //         mainMenuTop.removeClass('nav-fixed');
                
        //     } else {
        //         // active sticky menu on scrollup 
        //         mainMenuTop.addClass('nav-fixed');
        //     }

        // } else {
        //     mainMenuTop.removeClass('nav-fixed ');
        // }
        // lastScrollTop = st;
       
    });
           
    $(window).on('load',function(){
        /*-----------------------------
            preloader
        -----------------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(1000);
        /*-----------------------------
            back to top
        -----------------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut(100);
    });


    // << == Back To Top == >>
    $(".back-to-top").hide();
    $(function () {
        $(window).scroll(function(){
            if ($(window).scrollTop()>100){
            $(".back-to-top").fadeIn(1500);
            }
            else
            {
            $(".back-to-top").fadeOut(1500);
            }
        });
        //back to top
        $(".back-to-top").click(function(){
            $('body,html').animate({scrollTop:0},1000);
            return false;
        });
    });






        $(window).on('scroll', function (event) {
            var scrollValue = $(window).scrollTop();
            if (scrollValue > 100) {
                $('.navbar').addClass('affix');
            } else{
                $('.navbar').removeClass('affix');
            }
        });


        $(function() {
          $('.scroll-dwon a[href*=#]').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 700, 'linear');
          });
        });

}(jQuery));	
