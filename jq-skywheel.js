(function ($) {
    'use strict';
    jQuery.fn.skywheel =  function () {
        this.addClass("jq_skywheel");
        var lilist = this.children(),
            lilen = lilist.length,
            i,
            k;
        this.chosen = lilen - 1;
        lilist.each(function (index, el) {
            var helperin = function () {
                },
                helperout = function () {
                },
                helperclick = function () {
                    if ($(el).hasClass("center")) {
                        for (i = 0; i < lilen; i += 1) {
                            $(lilist[i]).removeClass();
                        }
                        $(el).addClass("chosen");
                        this.chosen = index;
                        return;
                    }
                    jQuery(el).removeClass();
                    $(el).addClass("center");
                    var j = 1;
                    for (i = 0; i < lilen; i += 1) {
                        if (i !== index) {
                            $(lilist[i]).removeClass();
                        }
                    }
                    for (i = index + 1; i < 3 + index; i += 1) {
                        k = i >= lilen ? i - lilen : i;
                        $(lilist[k]).removeClass();
                        $(lilist[k]).addClass("close" + j);
                        j += 1;
                    }
                    j = 1;
                    for (i = index - 1; i > index - 3; i -= 1) {
                        k = i < 0 ? i + lilen : i;
                        $(lilist[k]).removeClass();
                        $(lilist[k]).addClass("nclose" + j);
                        j += 1;
                    }
                };
            $(el).on("click", helperclick);
            $(el).on("mouseenter", helperin);
            $(el).on("mouseleave", helperout);
        });
    };
}(jQuery));