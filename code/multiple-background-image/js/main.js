/*----------------------------------------------------------------------------

        1.	Loader
        2.	Placeholder plugin
        3.	Clock Setup
        4.	Background Slider / Parallax
        5.	Validate Form
        6.	Modal Window
		7.	FireFly
		8.	Rotator

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
    $('#clock').countdown('2014/12/01', function(event) {
        $(this).html(event.strftime(''
                + '<div class="clock-section"><span>%D</span> <p>days</p></div> '
                + '<div class="clock-section"><span>%H</span> <p>hours</p></div> '
                + '<div class="clock-section"><span>%M</span> <p>minutes</p></div> '
                + '<div class="clock-section"><span>%S</span> <p>seconds</p></div>'));
    });

/*----------------------------------------------------------------------------*/
/*	4.	Background Slider / Parallax
/*----------------------------------------------------------------------------*/	
	// Parallax
	var $scene = $('#scene');
	$scene.parallax();
	
	$(".body-bg").backstretch([
		"images/in-the-depths.jpg",
		"images/bokeh-blue.jpg"
	], {duration: 10000, fade: 1000});
	
/*----------------------------------------------------------------------------*/
/*	5.	Validate Fotm
/*----------------------------------------------------------------------------*/
    $('form#contactform').submit(function(e) {
		e.preventDefault();
        var action = $(this).attr('action');

        $("#contact-form-message").fadeIn("100", function() {
            $('#contact-form-message').hide();
			
            $.post(action, {
                name: $('#contact-name').val(),
                email: $('#contact-email').val(),
                comments: $('#contact-comments').val()
            },
				function(data) {
					$('#contact-form-message').html(data);
					$('#contact-form-message').fadeIn("100");
					console.log(data);
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
		images : ['images/in-the-depths/fly1by1.png', 'images/in-the-depths/fly2by2.png', 'images/in-the-depths/fly3by3.png'],
		total : 30,
		on: '.body-bg'
	});
	
/*----------------------------------------------------------------------------*/
/*	8.	Rotating Title
/*----------------------------------------------------------------------------*/
	$("#rotate").rotator();
});

