/*!
 Alba - HTML Startup Template, v1.0
 Main JS file
 Copyright © 2017 5Studios.net
 http://5studios.net
 */

(function() {
    'use strict';

    Pace.on("done", function() {
        console.log("finishing loading the page");
    });

    // Avoid `console` errors in browsers that lack a console.
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any code in here.
$(function() {
    'use strict';

    /**
     * STICKY MENU
     **/
    var $navbar = $(".navigation"),
        stickyPoint = 90;

    function navbarSticky() {
        if ($(window).scrollTop() >= stickyPoint) {
            $navbar.addClass("navbar-sticky");
        } else {
            $navbar.removeClass("navbar-sticky");
        }
    }

    $(window).scroll(function () {
        navbarSticky();
    });

    navbarSticky();

    /**
     *  NAVBAR SIDE COLLAPSIBLE
     **/
    $(".navbar-toggler").on("click", function() {
        $navbar.toggleClass("navbar-expanded");
    });

   /**
    * AOS Initialization
    **/
    AOS.init({
        offset: 200,
        duration: 1500,
        disable: "mobile"
    });

    /**
     * Swiper Initialization
     **/
    $('.swiper-container').each(function() {
        var $this = $(this);

        var autoplay = $this.data('swiper-autoplay') || 3000;
        var speed = $this.data('swiper-speed') || 1100;

        var options = {
            pagination: $('.swiper-pagination', this),
            nextButton: $('.swiper-button-next', this),
            prevButton: $('.swiper-button-prev', this)
        };

        var swiper = new Swiper (this, $.extend({
            loop: true,
            autoplay: autoplay,
            speed: speed,
            paginationClickable: true,
            autoplayDisableOnInteraction: false
        }, options));
    });

    /**
     * Values Slider on Pricing Plans
     **/
    $('.pricing [data-toggle="slider"]').each(function() {
        var $element = $(this);
        var currentValue = $element.data("slider-value");

        //TODO: data-rel, if exists take it
        var $price = $('.price', $element.parent().siblings('.pricing-value'));
        var $value = $('.value', $element.prev()).text(currentValue);

        function calculatePrice (val) {
            // Implement your own price calculation function here
            return (val * 9.99).toFixed(2);
        }

        function renderValues(newValue) {
            var price = calculatePrice(newValue);

            $price.text(price);
            $value.text(newValue);
        }

        $element.slider();
        $element.on('change', function(data) {
            renderValues(data.value.newValue);
        });

        renderValues(currentValue);
    });

    /**
     * Popover
     **/
    $('[data-toggle="popover"]').popover();
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {

        });
      }
    }
  });
