; // This script checks whether the element is in view or not.
(function ($, win) {
    $.fn.inViewport = function (cb) { // Function created named inViewport.
        return this.each(function (i, el) {
            function visPx() {
                var H = $(this).height(),
                    r = el.getBoundingClientRect(), // Getting dom rect.
                    t = r.top,  // Getting top and bottom of boundingRect
                    b = r.bottom;
                return cb.call(el, Math.max(0, t > 0 ? H - t : (b < H ? b : H))); // Calculating if in viewport and returning.
            }
            visPx();
            $(win).on("resize scroll", visPx);
        });
    };
}(jQuery, window));
var Check;

$("#atemga").inViewport(function (px) { // Same usage is applied to all the method calls below.

    if (px) {
        $(this).addClass("animated 5 fadeInUp");
    } else {

    }
});

$("#neo").inViewport(function (px) {

    if (px) {
        $(this).addClass("animated 5 fadeInUp");
    } else {

    }
});

$("#lcd").inViewport(function (px) {

    if (px) {
        $(this).addClass("animated 5 fadeInUp");
    } else {

    }
});

$("#eeprom").inViewport(function (px) {

    if (px) {
        $(this).addClass("animated 5 fadeInUp");
    } else {

    }
});

$("#timers").inViewport(function (px) {

    if (px) {
        $(this).addClass("animated 5 fadeInUp");
    } else {

    }
});


$("#interrupts").inViewport(function (px) {

    if (px) {
        $(this).addClass("animated 5 fadeInUp");
    } else {

    }
});


$("#buttons").inViewport(function (px) {

    if (px) {
        $(this).addClass("animated 5 fadeInUp");
    } else {

    }
});

$("#galleri").inViewport(function (px) {

    if (px) {
        $(this).addClass("animated 5 fadeInUp");
    } else {

    }
});