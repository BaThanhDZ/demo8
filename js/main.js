//scroll add nav-scroll
$(window).scroll( function () {
	if($(this).scrollTop () > 400 ) {
		$('#nav_sticky').addClass('sticky_nav')
	}else {
		$('#nav_sticky').removeClass('sticky_nav')
	}	

})

//nav-mobile 
$('.button-mobile').click( function () {

  $(".button-show").toggleClass('button-hide')

  $('.nav-mobile').fadeToggle('slow')
})

// scroll check progress
function scrollProgress() {
  var check1 = document.getElementById('check-item1');
  var check2 = document.getElementById('check-item2');
  var check3 = document.getElementById('check-item3');
  var check4 = document.getElementById('check-item4');
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      var check_item = check1.getAttribute('data-testItem');
      check1.style.width = `${(check_item)}`
      var check_item = check2.getAttribute('data-testItem');
      check2.style.width = `${(check_item)}`
      var check_item = check3.getAttribute('data-testItem');
      check3.style.width = `${(check_item)}`
      var check_item = check4.getAttribute('data-testItem');
      check4.style.width = `${(check_item)}`
    }
  })
}
scrollProgress();

// scroll translateY section
function transformSection() {
    $(window).scroll( function () {
      if($(this).scrollTop() > 200 ){
        $('.section_features').addClass('section_add1')
      }
    });

    $(window).scroll( function () {
      if($(this).scrollTop() > 600 ){
        $('.section_count_numbers').addClass('section_add2')
      }
    });

    $(window).scroll( function () {
      if($(this).scrollTop() > 950 ){
        $('.section_services').addClass('section_add3')
      }
    });

    $(window).scroll( function () {
      if($(this).scrollTop() > 1850 ){
        $('.section_clients').addClass('section_add4')
      }
    });

    $(window).scroll( function () {
      if($(this).scrollTop() > 2400 ){
        $('.section_blog').addClass('section_add5')
      }
    });

    $(window).scroll( function () {
      if($(this).scrollTop() > 3200 ){
        $('.section_footer').addClass('section_add6')
      }
    });
}
transformSection();

//navClick
// function navClick() {
//   $('.skill').click( function () {
//     $('html').animate({scrollTop: 700}, 100)
//   })
//   $('.service').click( function () {
//     $('html').animate({scrollTop: 1400}, 100)
//   })
//   $('.client').click( function () {
//     $('html').animate({scrollTop: 2200}, 100)
//   })
//   $('.blog').click( function () {
//     $('html').animate({scrollTop: 2800}, 100)
//   })
//   $('.page').click( function () {
//     $('html').animate({scrollTop: 3400}, 200)
//   })
// }
//navClick();

function highlightNav() {
  $(window).scroll( function () {
    if ($(this).scrollTop() > 0) {
      $('.home').addClass('active_color')
    }

    if ($(this).scrollTop() > 499) {
      $('.skill').addClass('active_color')
      $('.home').removeClass('active_color')
    }else {
      $('.skill').removeClass('active_color')
    }

    if ($(this).scrollTop() > 1300) {
      $('.service').addClass('active_color')
      $('.skill').removeClass('active_color')
    }else {
      $('.service').removeClass('active_color')
    }

    if ($(this).scrollTop() > 2100) {
      $('.client').addClass('active_color')
      $('.service').removeClass('active_color')
    }else {
      $('.client').removeClass('active_color')
    }

    if ($(this).scrollTop() > 2750) {
      $('.blog').addClass('active_color')
      $('.client').removeClass('active_color')
    }else {
      $('.blog').removeClass('active_color')
    }

    if ($(this).scrollTop() > 3300) {
      $('.page').addClass('active_color')
      $('.blog').removeClass('active_color')
    }else {
      $('.page').removeClass('active_color')
    }

  })
}
highlightNav();

//scrollmobile
function navclickMobile() {
  if(window.innerWidth == 1024) {
    $('.skill').click( function () {
      $('html').animate({scrollTop: 780}, 100)
    })
    $('.service').click( function () {
      $('html').animate({scrollTop: 1500}, 100)
    })
    $('.client').click( function () {
      $('html').animate({scrollTop: 2350}, 100)
    })
    $('.blog').click( function () {
      $('html').animate({scrollTop: 2950}, 100)
    })
    $('.page').click( function () {
      $('html').animate({scrollTop: 3500}, 200)
    })
    return;
  } 
  if( window.innerWidth >= 768 && window.innerWidth < 1024) {
    $('.skill').click( function () {
      $('html').animate({scrollTop: 950}, 100)
    })
    $('.service').click( function () {
      $('html').animate({scrollTop: 1800}, 100)
    })
    $('.client').click( function () {
      $('html').animate({scrollTop: 2800}, 100)
    })
    $('.blog').click( function () {
      $('html').animate({scrollTop: 3350}, 100)
    })
    $('.page').click( function () {
      $('html').animate({scrollTop: 3700}, 200)
    })
    return;
  } 
  if ( window.innerWidth >= 481 && window.innerWidth <= 767 ) {
    $('.skill').click( function () {
      $('html').animate({scrollTop: 700}, 100)
    })
    $('.service').click( function () {
      $('html').animate({scrollTop: 2300}, 100)
    })
    $('.client').click( function () {
      $('html').animate({scrollTop: 4300}, 100)
    })
    $('.blog').click( function () {
      $('html').animate({scrollTop: 6150}, 100)
    })
    $('.page').click( function () {
      $('html').animate({scrollTop: 8100}, 200)
    })
    return;
  }
  if ( window.innerWidth <= 480 ) {
    $('.skill').click( function () {
      $('html').animate({scrollTop: 570}, 100)
    })
    $('.service').click( function () {
      $('html').animate({scrollTop: 2250}, 100)
    })
    $('.client').click( function () {
      $('html').animate({scrollTop: 4400}, 100)
    })
    $('.blog').click( function () {
      $('html').animate({scrollTop: 6200}, 100)
    })
    $('.page').click( function () {
      $('html').animate({scrollTop: 8000}, 200)
    })
    return;
  }
  else {
    $('.skill').click( function () {
      $('html').animate({scrollTop: 730}, 100)
    })
    $('.service').click( function () {
      $('html').animate({scrollTop: 1410}, 100)
    })
    $('.client').click( function () {
      $('html').animate({scrollTop: 2300}, 100)
    })
    $('.blog').click( function () {
      $('html').animate({scrollTop: 2820}, 100)
    })
    $('.page').click( function () {
      $('html').animate({scrollTop: 3400}, 200)
    })
  }
}
navclickMobile();


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-dots', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});


particlesJS(
  'particles-dots', {
    'particles': {
      'number': {
        'value': 200 // set dots numbers ←
      },
      'color': {
        // set colors and number of colors ↓
        'value': ['#FFB74D', '#FF5252', '#7C4DFF','#00B8D4']
      },
      'shape': {
        'type': 'circle'
      },
      'opacity': {
        'value': 1,
        'random': false,
        'anim': {
          'enable': false
        }
      },
      'size': {
        'value': 4, // set dots size ←
        'random': true,
        'anim': {
          'enable': false,
        }
      },
      'line_linked': {
        'enable': false
      },
      'move': {
        'enable': true,
        'speed': 4, // set speed ←
        'direction': 'none',
        'random': true,
        'straight': false,
        'out_mode': 'out'
      }
    },
    'interactivity': {
      'detect_on': 'canvas',
      'events': {
        'onhover': {
          'enable': false
        },
        'onclick': {
          'enable': false
        },
        'resize': true
      }
    },
    'retina_detect': true
});