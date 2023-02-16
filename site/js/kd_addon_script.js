/* ------------------------------------------------------------------------
  jQuery Appear
------------------------------------------------------------------------*/

!function(e){e.fn.appear=function(a,r){var p=e.extend({data:void 0,one:!0,accX:0,accY:0},r);return this.each(function(){var r=e(this);if(r.appeared=!1,a){var n=e(window),t=function(){if(r.is(":visible")){var e=n.scrollLeft(),a=n.scrollTop(),t=r.offset(),c=t.left,i=t.top,o=p.accX,f=p.accY,s=r.height(),l=n.height(),h=r.width(),d=n.width();i+s+f>=a&&i<=a+l+f&&c+h+o>=e&&c<=e+d+o?r.appeared||r.trigger("appear",p.data):r.appeared=!1}else r.appeared=!1},c=function(){if(r.appeared=!0,p.one){n.unbind("scroll",t);var c=e.inArray(t,e.fn.appear.checks);c>=0&&e.fn.appear.checks.splice(c,1)}a.apply(this,arguments)};p.one?r.one("appear",p.data,c):r.bind("appear",p.data,c),n.scroll(t),e.fn.appear.checks.push(t),t()}else r.trigger("appear",p.data)})},e.extend(e.fn.appear,{checks:[],timeout:null,checkAll:function(){var a=e.fn.appear.checks.length;if(a>0)for(;a--;)e.fn.appear.checks[a]()},run:function(){e.fn.appear.timeout&&clearTimeout(e.fn.appear.timeout),e.fn.appear.timeout=setTimeout(e.fn.appear.checkAll,20)}}),e.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(a,r){var p=e.fn[r];p&&(e.fn[r]=function(){var a=p.apply(this,arguments);return e.fn.appear.run(),a})})}(jQuery);


/* ------------------------------------------------------------------------
  jQuery easing
------------------------------------------------------------------------*/
!function(n){"function"==typeof define&&define.amd?define(["jquery"],function(e){return n(e)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=n(require("jquery")):n(jQuery)}(function(n){function e(n){var e=7.5625,t=2.75;return n<1/t?e*n*n:n<2/t?e*(n-=1.5/t)*n+.75:n<2.5/t?e*(n-=2.25/t)*n+.9375:e*(n-=2.625/t)*n+.984375}void 0!==n.easing&&(n.easing.jswing=n.easing.swing);var t=Math.pow,u=Math.sqrt,r=Math.sin,i=Math.cos,a=Math.PI,o=1.70158,c=1.525*o,s=2*a/3,f=2*a/4.5;return n.extend(n.easing,{def:"easeOutQuad",swing:function(e){return n.easing[n.easing.def](e)},easeInQuad:function(n){return n*n},easeOutQuad:function(n){return 1-(1-n)*(1-n)},easeInOutQuad:function(n){return n<.5?2*n*n:1-t(-2*n+2,2)/2},easeInCubic:function(n){return n*n*n},easeOutCubic:function(n){return 1-t(1-n,3)},easeInOutCubic:function(n){return n<.5?4*n*n*n:1-t(-2*n+2,3)/2},easeInQuart:function(n){return n*n*n*n},easeOutQuart:function(n){return 1-t(1-n,4)},easeInOutQuart:function(n){return n<.5?8*n*n*n*n:1-t(-2*n+2,4)/2},easeInQuint:function(n){return n*n*n*n*n},easeOutQuint:function(n){return 1-t(1-n,5)},easeInOutQuint:function(n){return n<.5?16*n*n*n*n*n:1-t(-2*n+2,5)/2},easeInSine:function(n){return 1-i(n*a/2)},easeOutSine:function(n){return r(n*a/2)},easeInOutSine:function(n){return-(i(a*n)-1)/2},easeInExpo:function(n){return 0===n?0:t(2,10*n-10)},easeOutExpo:function(n){return 1===n?1:1-t(2,-10*n)},easeInOutExpo:function(n){return 0===n?0:1===n?1:n<.5?t(2,20*n-10)/2:(2-t(2,-20*n+10))/2},easeInCirc:function(n){return 1-u(1-t(n,2))},easeOutCirc:function(n){return u(1-t(n-1,2))},easeInOutCirc:function(n){return n<.5?(1-u(1-t(2*n,2)))/2:(u(1-t(-2*n+2,2))+1)/2},easeInElastic:function(n){return 0===n?0:1===n?1:-t(2,10*n-10)*r((10*n-10.75)*s)},easeOutElastic:function(n){return 0===n?0:1===n?1:t(2,-10*n)*r((10*n-.75)*s)+1},easeInOutElastic:function(n){return 0===n?0:1===n?1:n<.5?-t(2,20*n-10)*r((20*n-11.125)*f)/2:t(2,-20*n+10)*r((20*n-11.125)*f)/2+1},easeInBack:function(n){return 2.70158*n*n*n-o*n*n},easeOutBack:function(n){return 1+2.70158*t(n-1,3)+o*t(n-1,2)},easeInOutBack:function(n){return n<.5?t(2*n,2)*(7.189819*n-c)/2:(t(2*n-2,2)*((c+1)*(2*n-2)+c)+2)/2},easeInBounce:function(n){return 1-e(1-n)},easeOutBounce:e,easeInOutBounce:function(n){return n<.5?(1-e(1-2*n))/2:(1+e(2*n-1))/2}}),n});



/* ------------------------------------------------------------------------
    jQuery inViweport
------------------------------------------------------------------------*/

jQuery(document).ready(function($) {


  /* ------------------------------------------------------------------------
    TEXT ROTATOR
   ------------------------------------------------------------------------*/

  $(".kd-text-rotator").each(function(){
  var animationDelay = parseInt($(this).attr('data-speed'),10);
  animateHeadline($('.kd-text-rotator-container'));

    function animateHeadline($headlines) {
       $headlines.each(function(){
          var headline = $(this);
          setTimeout(function(){ hideWord( headline.find('.is-visible') ) }, animationDelay);
       });
    }

    function hideWord($word) {
       var nextWord = takeNext($word);
       switchWord($word, nextWord);
       setTimeout(function(){ hideWord(nextWord) }, animationDelay);
    }

    function takeNext($word) {
       return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
    }

    function switchWord($oldWord, $newWord) {
       $oldWord.removeClass('is-visible').addClass('is-hidden');
       $newWord.removeClass('is-hidden').addClass('is-visible');
    }

  });



  /* ------------------------------------------------------------------------
    PORTFOLIO CAROUSEL
  ------------------------------------------------------------------------*/
  if ($(".fullwidth-carousel").length) {
    setTimeout(function() {
      $(".fullwidth-carousel .vc_pageable-slide-wrapper").owlCarousel({
          stageClass: "owl-wrapper",
          stageOuterClass: "owl-wrapper-outer",
          loadedClass: "owl-carousel",
          responsive:{
              0:{
                  items: 1,
                  nav: true,
                  navSpeed: 500,
                  dots: false,
              },
              767:{
                  items: 3,
                  nav: true,
                  navSpeed: 500,
                  dots: false,
              },
              960:{
                  nav: true,
                  items: 3,
                  navSpeed: 500,
                  dots: false,
              }
          },
          items: 3,
          navSpeed: 500,
          nav: true,
          dots: false,
          rewind: true,
          loop: true,
      });
    }, 2000)
  }


  (function($, win) {
    $.fn.inViewport = function(cb) {
      return this.each(function(i, el) {
        function visPx() {
          var H = $(this).height(),
            r = el.getBoundingClientRect(),
            t = r.top,
            b = r.bottom;
          return cb.call(el, Math.max(0, t > 0 ? H - t : (b < H ? b : H)));
        }
        visPx();
        $(win).on("resize scroll", visPx);
      });
    };
  }(jQuery, window));

  /* ------------------------------------------------------------------------
    ANIMATION
   ------------------------------------------------------------------------*/

  $(".kd-animated").inViewport(function(px) {
    if (px) $(this).addClass("kd-animate");
  });

  /* ------------------------------------------------------------------------
    COUNTDOWN
   ------------------------------------------------------------------------*/
  $('.kd-countdown').each(function(index, value) {
    var text_days = $(this).attr("data-text-days");
    var text_hours = $(this).attr("data-text-hours");
    var text_minutes = $(this).attr("data-text-minutes");
    var text_seconds = $(this).attr("data-text-seconds");

    var count_year = $(this).attr("data-count-year");
    var count_month = $(this).attr("data-count-month");
    var count_day = $(this).attr("data-count-day");
    var count_hour = $(this).attr("data-count-hour");
    var count_minute = $(this).attr("data-count-minute");
    var count_date = count_year + '/' + count_month + '/' + count_day + ' ' + count_hour + ':' + count_minute + ':00';
    $(this).countdown(count_date, function(event) {
      $(this).html(
        event.strftime('<span class="CountdownContent">%D<span class="CountdownLabel">' + text_days + '</span></span><span class="CountdownSeparator">:</span><span class="CountdownContent">%H <span class="CountdownLabel">' + text_hours + '</span></span><span class="CountdownSeparator">:</span><span class="CountdownContent">%M <span class="CountdownLabel">' + text_minutes + '</span></span><span class="CountdownSeparator">:</span><span class="CountdownContent">%S <span class="CountdownLabel">' + text_seconds + '</span></span>')
      );
    });
  });


  /* ------------------------------------------------------------------------
    IMAGE GROUP
   ------------------------------------------------------------------------*/

  jQuery(".kd-photo-group.enable-parallax .kd-group-image").inViewport(function(px) {
    if (px) {
        var firstTop = $(this).offset().top;
        var winScrollTop = $(window).scrollTop();
        var parallaxCoef = 0;
        if($(this).hasClass('second-image-wrapper')) {
            parallaxCoef = 0.10;
        }
        var shiftDistance = (firstTop - winScrollTop)*parallaxCoef;
        $(this).css('transform','translateY('+shiftDistance+'px)');
      }
  });


  /* ------------------------------------------------------------------------
    DOTS PARALLAX
   ------------------------------------------------------------------------*/

  jQuery(".kd-shapes.shape_dots.with-parallax").inViewport(function(px) {
    if (px) {
        var firstTop = $(this).offset().top;
        var winScrollTop = $(window).scrollTop();
        var parallaxCoef = $(this).attr("data-parallax-speed");
        var shiftDistance = (firstTop - winScrollTop)*parallaxCoef;
        $(this).css('transform','translateY('+shiftDistance+'px)');
      }
  });


  /* ------------------------------------------------------------------------
    PRICING TABLE HOVER & SWITCHER
   ------------------------------------------------------------------------*/
    $( ".comparison-pricing-table .pricing-row,.comparison-pricing-table .pricing-headings .vc_custom_heading" ).hover(
         function() {
            var index = $(this).index();
            $('.comparison-pricing-table .pricing-options-container,.comparison-pricing-table .pricing-headings .wpb_wrapper').each(function(){
            $(this).children().eq(index).addClass( "active" );
            });
          }, function() {
          var index = $(this).index();
            $('.comparison-pricing-table .pricing-options-container,.comparison-pricing-table .pricing-headings .wpb_wrapper').each(function(){
            $(this).children().eq(index).removeClass( "active" );
            });
          }
    );

    $(".comparison-pricing-table .pricing-headings .vc_custom_heading" ).each(
         function() {
            var index = $(this).index();
            var title = $(this).text();
            var strong = '';
            if($(this).hasClass('strong')) { strong = 'strong'; }
            $('.comparison-pricing-table .pricing-options-container').each(function(){
            $(this).children().eq(index).prepend('<span class="mobile-title '+ strong +'">' + title + ':</span>');
            });
          }
    );


    $('.kd-price-switch input').on('click', function() {
    // $(".kd-price-switch input").click( function(){
      $(this).parents(".kd-ps-wrapper").toggleClass('active');
      jQuery(".pricing .tt_button").each(function(index, value) {
          var pricing_btn = $(this);
          var primary_btn_url = pricing_btn.attr("href");
          var secondary_btn_url = pricing_btn.attr("data-secondary-link");
          var aux_url = primary_btn_url;
          pricing_btn.attr("href", secondary_btn_url);
          pricing_btn.attr("data-secondary-link", aux_url);
      });
      if( $(this).is(':checked') ) {
        $(this).parents(".vc_row-fluid").find(".pricing").addClass('secondary-price');
      } else {
        $(this).parents(".vc_row-fluid").find(".pricing").removeClass('secondary-price');
      }
    });



  /* ------------------------------------------------------------------------
    PIE CHART
   ------------------------------------------------------------------------*/

  jQuery(".kd_pie_chart .kd_chart").each(function(index, value) {
    jQuery(this).appear(function() {
      jQuery(this).easyPieChart({
        barColor: "#000",
        trackColor: "rgba(210, 210, 210, 0.2)",
        animate: 2000,
        size: "160",
        lineCap: 'round',
        lineWidth: "2",
        scaleColor: false,
        onStep: function(from, to, percent) {
          jQuery(this.el).find(".pc_percent").text(Math.round(percent));
        }
      });
    });
    var chart = window.chart = jQuery(".kd_pie_chart .kd_chart").data("easyPieChart");
  });

  /* ------------------------------------------------------------------------
    COUNTERS
   ------------------------------------------------------------------------*/

  jQuery(".kd_number_string").each(function(index, value) {
    jQuery(this).appear(function() {
      jQuery(this).countTo();
    });
  });


  /* ------------------------------------------------------------------------
      REFRESH GOOGLE MAP WITH THE ACTIVE TAB
   ------------------------------------------------------------------------*/
  if (jQuery(".contact-map-container").length) {
    jQuery('.vc_tta-tabs a').on('show.vc.tab', function() {
      setTimeout(function() {
        google.maps.event.trigger(window, 'resize', {});
      }, 500)
    });
  }

  jQuery('.toggle-map-info').on('click', function(e) {
    e.preventDefault();
    jQuery('.business-info-wrapper').toggleClass('minimize');
  });


  /* ------------------------------------------------------------------------
      VIDEO MODAL
   ------------------------------------------------------------------------*/

  function autoPlayYouTubeModal() {
    var trigger = $("body").find('.video-container [data-toggle="modal"]');
    trigger.click(function() {
      var theModal = $(this).data("target");
      videoSRC = $(this).data("src");
      videoSRCauto = videoSRC + "?showinfo=0&autoplay=1&enablejsapi=1&wmode=opaque";
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal + ' button.close').click(function() {
        $(theModal + ' iframe').attr('src', videoSRC);
      });
      $('.modal').click(function() {
        $(theModal + ' iframe').attr('src', videoSRC);
      });
    });
  }
  autoPlayYouTubeModal();

  function autoPlayVideoModal() {
    var trigger = $("body").find('.video-container [data-toggle="modal"]');
      trigger.click(function() {
      var theModal = $(this).data("target");
      if ($(theModal + ' .video-modal-local').length) {
        $(theModal + ' .video-modal-local')[0].play();
      }
    });
  }
  autoPlayVideoModal();

  $('body').on('hidden.bs.modal', '.modal', function () {
    $('video').trigger('pause');
  });

  if (jQuery(".modal.video-modal").length > 0) {
    jQuery(".video-modal").each(function() {
      jQuery(this).insertAfter("#footer");
    });
  }


  /* ------------------------------------------------------------------------
    FLOATING MENU
   ------------------------------------------------------------------------*/
  if (jQuery(".fm-wrapper.enable-scrollspy").length > 0) {
    jQuery('body').scrollspy({
      offset: 80,
      target: '.fm-nav'
    });
  }

  /* ------------------------------------------------------------------------
    FEATURE SECTIONS
   ------------------------------------------------------------------------*/
  if (jQuery(".feature-sections-wrapper").length > 0) {
    jQuery('body').scrollspy({
      offset: 180,
      target: '.kd-feature-tabs'
    });
  }


});


jQuery(window).on('load', function() {


  jQuery('.fm-wrapper.enable-scrollspy li a[href*=\\#]').bind('click', function(e) {
    e.preventDefault();
    var target = jQuery(this).attr("href");
    jQuery('html, body').stop().animate({
      scrollTop: jQuery(target).offset().top - 76
    }, 1000, 'easeInOutQuart');
    return false;
  });



  /* ------------------------------------------------------------------------
    STICKY MENU
   ------------------------------------------------------------------------*/

   jQuery(".fm-wrapper").each(function() {
      setTimeout(function (){
        jQuery('.fm-wrapper').addClass('visible');
      }, 1000);
   });

  /* ------------------------------------------------------------------------
    EXTENDED TABS
   ------------------------------------------------------------------------*/

  if ( jQuery(".features-tabs").length > 0 ) {
      jQuery(".features-tabs").each( function () {
      jQuery( "li.tab-control-item", this ).appendTo( jQuery( ".tab-controls", this ) );
    });

    jQuery(".features-tabs").easytabs({
      updateHash: false,
      animationSpeed: "fast",
      transitionIn: "fadeIn"
    });
  }



  /* ------------------------------------------------------------------------
  STICKY NAVIGATION ELEMENT
 ------------------------------------------------------------------------*/


  if (jQuery(".feature-sections-wrapper").length > 0) {
    var adminbar_offset = 0;
    if (jQuery("#wpadminbar").length > 0) { adminbar_offset = 32; }
    if (jQuery(".vc_editor.compose-mode").length > 0) { adminbar_offset = 0; }
    if (jQuery('.navbar-default.with-topbar-sticky').length > 0) {
      var sticky_offset = jQuery('.navbar-default.with-topbar-sticky').outerHeight();
       if (jQuery( '.navbar-default' ).hasClass( 'fixed-menu' )) { sticky_offset = 0;}
      jQuery('.feature-sections-tabs').css( "top", sticky_offset + adminbar_offset );
    } else {
      var sticky_offset = jQuery('.navbar.navbar-default .menubar').outerHeight();
      if (jQuery( '.navbar-default' ).hasClass( 'fixed-menu' )) { sticky_offset = 0;}
      jQuery('.feature-sections-tabs').css( "top", sticky_offset + adminbar_offset );
    }


    jQuery(".feature-sections-wrapper").each(function() {
      var tabNumber = 1;
          jQuery(".nav-number").each(function() {
          jQuery(this).html(tabNumber);
          tabNumber++;
          });
      jQuery("li.nav-label", this).appendTo(jQuery(".sticky-tabs", this));
    });

    jQuery('.sticky-tabs li a[href*=\\#]').bind('click', function(e) {
      e.preventDefault();
      var target = jQuery(this).attr("href");
      jQuery('html, body').stop().animate({
        scrollTop: jQuery(target).offset().top - 176
      }, 1000, 'easeInOutQuart');
      return false;
    });

    jQuery('.feature-sections-wrapper').each(function() {
        var feature_container = jQuery(this);
        var feature_nav = jQuery(".feature-sections-tabs");
        var offset = feature_container.offset().top;

        jQuery(window).scroll(function(event) {
          var scroll = jQuery(window).scrollTop();
          var total = feature_container.height() + offset - 200;
          if (scroll > total) {
            feature_nav.addClass('sticky-hide')
          }
          if (scroll < total) {
            feature_nav.removeClass('sticky-hide')
          }
        });
    });

  }

  /* ------------------------------------------------------------------------
  MASONRY GALLERY ELEMENT
  ------------------------------------------------------------------------*/

  if (jQuery('.mg-gallery').length > 0) {
    jQuery('.mg-gallery').each(function() {
      var msnry = new Masonry(this, {
        itemSelector: '.mg-single-img',
        columnWidth: '.mg-sizer',
        percentPosition: true,
        gutter: 30
      });
    });
    var classes = '.vc_tta-tabs-list .vc_tta-tab,' + '.vc_pagination .vc_pagination-item';
    jQuery('body').on('click', classes,
      function() {
        setInterval(function(){
        var reloadMasonry = jQuery('.vc_active .mg-gallery').masonry({
            itemSelector: '.mg-single-img',
            columnWidth: '.mg-sizer',
            percentPosition: true,
            gutter: 30
        });
        reloadMasonry.masonry("reloadItems");
        reloadMasonry.masonry('layout');
        },200);
      });
  }

  /* ------------------------------------------------------------------------
  ALERT BOX ELEMENT
  ------------------------------------------------------------------------*/

  jQuery('.kd-alertbox .ab-close').on('click', function(e) {
    e.preventDefault();
    jQuery(this).closest('.kd-alertbox').hide(200);
  });



});

/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */