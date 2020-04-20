//"Back to Top" Button
$(document).ready(function() {
            
            $(window).scroll(function() {
                if ($(this).scrollTop() > $(window).height()*.25) {
                    $('.go-to-top').fadeIn();
                } else {
                    $('.go-to-top').fadeOut();
                }
            });

            
            $('.go-to-top').click(function(event) {
                event.preventDefault();

                $('html, body').animate({scrollTop: 0}, 300);
            })
        });

/*Used this as a reference: https://stackoverflow.com/questions
/22361901/sticky-back-to-top-button-showing-on-page-load-before-scrolling-down*/