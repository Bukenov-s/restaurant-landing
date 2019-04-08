/*!
 * restaurant
 * restaurant
 * -
 * @author serik
 * @version 1.0.5
 * Copyright 2019. MIT licensed.
 */
(function($, window, document, undefined) {
  'use strict';

  $(function() {
    // navbar show and hide functionality
    var menuBtn = document.querySelector('.nav-burger');
    var links = document.querySelector('.links');

    menuBtn.addEventListener('click', function() {
      links.classList.toggle('open');
    });

    // back to top button
    $(window).scroll(function() {
      if ($(this).scrollTop() >= 50) {
        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200); // Fade in the arrow
      } else {
        $('#return-to-top').fadeOut(200); // Else fade out the arrow
      }
    });
    $('#return-to-top').click(function() {
      // When arrow is clicked
      $('body,html').animate(
        {
          scrollTop: 0 // Scroll to top of body
        },
        500
      );
    });

    // sticky nav
    function scrollFunction() {
      var sn = document.getElementById('navbar');
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        sn.classList.add('scrolling');
      } else {
        sn.classList.remove('scrolling');
      }
    }

    window.onscroll = function() {
      scrollFunction();
    };

    //scrollSpy function
    function scrollSpy() {
      var sections = [
        'home',
        'about',
        'ingredients',
        'foodmenu',
        'reviews',
        'reservation'
      ];
      var current;
      for (var i = 0; i < sections.length; i++) {
        if ($('#' + sections[i]).offset().top <= $(window).scrollTop()) {
          current = sections[i];
        }
      }
      $("nav a[href='#" + current + "']").addClass('active');
      $('nav a')
        .not("a[href='#" + current + "']")
        .removeClass('active');
    }

    //scrollSpy call
    $(document).ready(function() {
      scrollSpy();
    });
    $(window).scroll(function() {
      scrollSpy();
    });
  });
})(jQuery, window, document);
