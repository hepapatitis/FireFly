/*----------------------------------------------------------------------------

        1.	Loader
        2.	Placeholder plugin
        3.	Clock Setup
        4.	Background Slider
        5.	Validate Form
        6.	Modal Window
		7.	FireFly

/*----------------------------------------------------------------------------*/
jQuery(document).ready(function($) {
    'use strict';
/*----------------------------------------------------------------------------*/
/*	1.	Loader
/*----------------------------------------------------------------------------*/
$(window).load(function() {
    $("#preload-content").delay(300).fadeOut("400");
    $("#preload").delay(800).fadeOut("400");
});

/*----------------------------------------------------------------------------*/
/*	2.	Placeholder Plugin
/*----------------------------------------------------------------------------*/
    $('input, textarea').placeholder();

/*----------------------------------------------------------------------------*/
/*	3.	Clock Setup
/*----------------------------------------------------------------------------*/
    $('#clock').countdown('2014/12/31', function(event) {
        $(this).html(event.strftime(''
                + '<div class="clock-section"><span>%D</span> <p>days</p></div> '
                + '<div class="clock-section"><span>%H</span> <p>hours</p></div> '
                + '<div class="clock-section"><span>%M</span> <p>minutes</p></div> '
                + '<div class="clock-section"><span>%S</span> <p>seconds</p></div>'));
    });

/*----------------------------------------------------------------------------*/
/*	4.	Background Slider
/*----------------------------------------------------------------------------*/
    $.backstretch([
        'img/background-01.jpg'
    ]);

/*----------------------------------------------------------------------------*/
/*	5.	Validate Fotm
/*----------------------------------------------------------------------------*/
    $('#contactform').submit(function() {
 
        var action = $(this).attr('action');

        $("#message").fadeIn("100", function() {
            $('#message').hide();

            $.post(action, {
                email: $('#email').val()
            },
                    function(data) {
                        document.getElementById('message').innerHTML = data;
                        $('#message').fadeIn("100");
                    }
            );
        });
        return false;
    });

/*----------------------------------------------------------------------------*/
/*	6.	Modal Window
/*----------------------------------------------------------------------------*/
    $('#modal-open').on('click', function(e) {
        var mainInner = $('#modal-window .container'),
                modal = $('#modal');

        mainInner.animate({opacity: 0}, 300, function() {
            $('html,body').scrollTop(0);
            modal.addClass('modal-active').fadeIn(600);
        });
        e.preventDefault();

        $('#modal-close').on('click', function(e) {
            modal.removeClass('modal-active').fadeOut(300, function() {
                mainInner.animate({opacity: 1}, 200);
            });
            e.preventDefault();
        });
    });

/*----------------------------------------------------------------------------*/
/*	7.	Firefly
/*----------------------------------------------------------------------------*/	
	$.firefly({
		images : ['images/fly1by1.png', 'images/fly2by2.png'],
		total : 75,
		on: '.body-bg'
	});
});

