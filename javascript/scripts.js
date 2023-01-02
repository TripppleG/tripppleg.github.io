jQuery(document).ready(function($) {

    //smooth scroll all a to their href
    $('a[href^="#"]').on('click', function(event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 65
            }, 1000);
        }
    });
});
