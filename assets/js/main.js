// JavaScript Document

//Nav

$(document).ready(function(){
	$('.menu-toggle').click(function(){
		$('nav').toggleClass('active');
	});
});

// Scroll

$('.scroll').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
		targetOffset = $(id).offset().top;
		
		
	$('html, body').animate({
		scrollTop: targetOffset - 80
	}, 500);
});

// Service Image

$(".project").hover3d({
  selector: ".project__card",
  shine: true,
});

//Testimonial

     $('.owl-carousel').owlCarousel({
    stagePadding: 20,
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
});

//Cleaning Top

$(function(){
	$('#redux').eraser({
		
	});
});