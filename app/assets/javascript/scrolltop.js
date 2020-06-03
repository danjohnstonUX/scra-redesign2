jQuery(document).ready(function($) {

  var visible = false;
  var topofDiv = $(".nhsuk-header").offset().top; //gets offset of header
  var height = $(".patient-banner").outerHeight() + $(".nhsuk-header").outerHeight(); //gets height of header

  //Check to see if the window is top if not then display button



  $(window).scroll(function() {
    if ($(this).scrollTop()) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }

    if ($(window).scrollTop() + $(window).height() < $(document).height() - $("#nhsuk-footer").height() - 92) {
      $('.scrollToTop').css("position", "fixed"); //resetting it
      $('.scrollToTop').css("bottom", "20px"); //resetting it
      $('.scrollToTop').css("right", "20px"); //resetting it
    }

    if ($(window).scrollTop() + $(window).height() > $(document).height() - $("#nhsuk-footer").height() - $(".ra-footer-container").height() - 92) {
      $('.scrollToTop').css("position", "relative");
      $('.scrollToTop').css("bottom", "62px");
    }

    // only run this if statement if not in refactoring proto as this doesn't need the name-dob floater
    if ($(window).scrollTop() > (topofDiv + height) && (window.location.href.indexOf("refactoring") === -1)) {
      $(".name-dob-floater").fadeIn();
      $('.adjustments-floater').fadeIn();

    } else {
      $(".name-dob-floater").fadeOut();
      $('.adjustments-floater').fadeOut();

    }

  });


  //Click event to scroll to top

  $(".scrollToTop").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
  });

  // Mobile navigation

  var s = $("#mobile-nav");
  var pos = s.position();
  $(window).scroll(function() {
    var windowpos = $(window).scrollTop();
    if (windowpos >= pos.top) {
      s.addClass("nav-stick");
    } else {
      s.removeClass("nav-stick");
    }
  });

  $('#mobile-nav-select').change(function() {
    var targetPosition = $($(this).val()).offset().top - 100;
    $('html,body').animate({
      scrollTop: targetPosition
    }, 'slow');
  });

  $(document).scroll(function() {
    var cutoff = $(window).scrollTop() + 200;

    if (window.location.href.indexOf("refactoring") > -1) {
      $('.scra-card').each(function() {
        if ($(this).offset().top + $(this).height() > cutoff) {
          $('#mobile-nav-select').val("#" + $(this).attr('id'));
          return false; // stops the iteration after the first one on screen
        }
      });
    }
  });

});
