//Use Strict Mode
(function($) {
  "use strict";

//Begin - Window Load
$(window).load(function(){


	//==============___Page Loader___================
  
  $('#page-loader').delay(300).fadeOut(400, function(){

  });

  $('#loader-name').addClass('loader-left');
  $('#loader-job').addClass('loader-right');
  $('#loader-animation').addClass('loader-hide');

});

//Begin - Document Ready
$(document).ready(function(){

//==============___Page Loader___================
  $('#loading-wraper').fadeIn(300);

//==============_Map_================
$('.map').on('click', function(){
	$('.map-overlay').hide();
});

$('.map').on('mouseleave', function(){
	$('.map-overlay').show();
});

//==============_Lightbox_================
//Nivo Lightbox
  $('a.nivobox').nivoLightbox({ effect: 'fade' });


//==============___Scrollbars___================
$('.section-vcardbody').perfectScrollbar({
  wheelSpeed: 0.9
});

//==============___Menu & Pages Animation___================

var linkHome = 0;
var linkPage = '';

function pageOn(){
    $('#main-menu').addClass('main-menu-pgactive');
    $('#section-home').addClass('section-vcardbody-pgactive');    
    $('.profileActive').removeClass('profileActive');    
    $('#profile2').addClass('profileActive');
    
    linkHome = 1;
}

function pageOff(){
    $('.section-page-active').removeClass('section-page-active');
    $('#main-menu').removeClass('main-menu-pgactive');
    $('#section-home').removeClass('section-vcardbody-pgactive');
    $('.profileActive').removeClass('profileActive');
    $('#profile1').addClass('profileActive');
    linkHome = 0;
}


$(".link-page").on('click', function(event){
  event.preventDefault();
  $('.menuActive').removeClass('menuActive');  
  $(this).addClass('menuActive');
  linkPage = $(this).attr('href');
  $('.section-page-active').removeClass('section-page-active');
  $(linkPage).addClass('section-page-active');
  pageOn();
});


$(".link-home").on('click', function(event){
  event.preventDefault();

  if (linkHome == 0) {
    //pageOn();
  }
  else if (linkHome == 1) {
    $('.menuActive').removeClass('menuActive');
    $(this).addClass('menuActive');
    pageOff();
  }  
});

//Modal for Contact Form
$('.modal-wrap').click(function(){
  $('.modal-wrap').fadeOut(300);
});   

$('#WAButton').floatingWhatsApp({
  phone: '919066393213', //WhatsApp Business phone number
  headerTitle: 'Chat with me on WhatsApp!', //Popup Title
  popupMessage: 'Hello, This is Prince Raj here', //Popup Message
  showPopup: true, //Enables popup display
  buttonImage: '<img src="img/whatsapp.svg" />', //Button Image
  //headerColor: 'crimson', //Custom header color
  //backgroundColor: 'crimson', //Custom background button color
  position: "left" //Position: left | right

});

//End - Document Ready
});

//End - Use Strict mode
})(jQuery);

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);