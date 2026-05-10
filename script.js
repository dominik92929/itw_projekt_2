$(document).ready(function () {

    // hamburger toggle
    $('#hamburger').click(function () {
        $('nav ul').toggle();
    });


    /*--------------------------
    sticky menu*/

    var navOffset = $('#navbar').offset().top;
    var navHeight = $('#navbar').outerHeight();

    $(window).scroll(function () {
        if ($(window).scrollTop() >= navOffset) {
            $('#navbar').addClass('sticky');

            // pridanie  paddingu aby obsah neskocil pod nav
            $('body').css('padding-top', navHeight + 'px');
        }

        else {
            $('#navbar').removeClass('sticky');
            $('body').css('padding-top', '0px');
        }
    })



    /*--------------------------------
    scrollovanie*/

    $('a').click(function (e) {
        var href = $(this).attr('href');


        // preskoc prazdny href="#"
        if (href === '#') {
            e.preventDefault();
            return;
        }

        var target = $(href);
        if (target.length) {
            e.preventDefault();
            var navH = $('nav').outerHeight();
            $('html, body').animate({
                scrollTop: target.offset().top - navH
            }, 1000);
        }

        // na xs zatvor menu po kliknuti
        if ($(window).width() < 576) {
            $('nav ul').hide();
        }
    });
    
});
