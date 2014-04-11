(function ($) {
    'use strict';
    jQuery.fn.skywheel =  function (options) {
        var opt = $.extend({}, $.fn.skywheel.defaults, options);
        var sheet = (function() {
            var style = document.createElement("style");
            document.head.appendChild(style);
            return style.sheet;
        })();
        sheet.insertRule(".jq_skywheel li{height:"+opt.height+";width:"+opt.width+";line-height:"+opt.height+";}",sheet.cssRules.length);
        sheet.insertRule(".jq_skywheel li .inner{height:"+opt.height+";width:"+opt.width+";line-height:"+opt.height+";}",sheet.cssRules.length);
        this.addClass("jq_skywheel");
        this.children().each(function (index, el) {
            $(el).contents().wrap("<span class='inner'></span>");
        });
        var lilist = this.children(),
            lilen = lilist.length,
            i,
            that = this,
            adjust = function adjust(index) {
                var i = 0,
                    k = 0,
                    j = 1;
                for (i = 0; i < lilen; i += 1) {
                    $(lilist[i]).removeClass();
                }
                $(lilist[index]).addClass("center");
                for (i = index + 1; i < 3 + index; i += 1) {
                    k = i >= lilen ? i - lilen : i;
                    $(lilist[k]).addClass("effect"+opt.effect+"_" + j);
                    $(lilist[k]).addClass("mask" + j);
                    j += 1;
                }
                j = 1;
                for (i = index - 1; i > index - 3; i -= 1) {
                    k = i < 0 ? i + lilen : i;
                    $(lilist[k]).addClass("effect"+opt.effect+"_n" + j);
                    $(lilist[k]).addClass("mask" + j);
                    j += 1;
                }
            };
        var keyhandler = function keyhandler(event) {
            var keyCode = event.keyCode,
                tomove = that.chosen,
                keyCodeNext = 40,
                keyCodePrev = 38;
            if(opt.keyOption == "updown"){
                keyCodeNext = 40;
                keyCodePrev = 38;
            }else if(opt.keyOption == "leftright"){
                keyCodeNext = 39;
                keyCodePrev = 37;
            }
            if (keyCode === keyCodePrev) {
                tomove = tomove <= 0 ? lilen - 1 : tomove - 1;
                adjust(tomove);
                that.chosen = tomove;
            } else if (keyCode === keyCodeNext) {
                tomove = tomove >= (lilen - 1) ? 0 : tomove + 1;
                adjust(tomove);
                that.chosen = tomove;
            }
        };
        if(opt.keyOption != "nokey"){
            $(document).keypress(keyhandler);
        }
        this.chosen = lilen - 1;
        lilist.each(function (index, el) {
            var helperin = function () {
                },
                helperout = function () {
                },
                helperclick = function () {
                    that.chosen = index;
                    if ($(el).hasClass("center")) {
                        for (i = 0; i < lilen; i += 1) {
                            $(lilist[i]).removeClass();
                        }
                        $(el).addClass("chosen");
                        return;
                    }
                    adjust(index);
                };
            $(el).on("click", helperclick);
            $(el).on("mouseenter", helperin);
            $(el).on("mouseleave", helperout);
        });
    };
    jQuery.fn.skywheel.defaults = {
        type: "normal",
        width: "100px",
        height: "40px",
        effect: 1,
        keyOption: "leftright"
    };
}(jQuery));
