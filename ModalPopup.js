(function ($) {
    $.fn.modal = function (options) {
        options = $.extend({
            modal: 'div.tasiyici',
            trigger: '#show',
            over: $('.overlay'),
            goster: function () {
                var sol = $('.sol'); var sag;
                if (sol.length==0) {
                    sol = document.createElement("Div");
                    $(sol).addClass("sol");
                    var sag = document.createElement("Div");
                    $(sag).addClass("sag");
                    $('body').append(sol); $('body').append(sag);
                }
                else
                    sag = $('.sag');
                $('.sol').show();
                $('.sag').show();
                $(sol).animate({ "top": "60%","opacity":"0" });
                $(sag).animate({ "bottom": "60%", "opacity": "0" });
                $(this.modal).delay(300).fadeIn();
                $(this.over).fadeIn();
                $(this.modal).append("<span id='kapat'>X</span>");
            },
            gizle: function () {
                $(this.modal).fadeOut();
                $(this.over).fadeOut();
                $('.sol').hide();
                $('.sag').hide();
                $('.sol').css({ "top": "0", "opacity": "1" });
                $('.sag').css({ "bottom": "0", "opacity": "1" });
            }
        },options);
        $(options.trigger).click(function () {
            options.goster();
        });

        $("#kapat").live("click", function () {
            options.gizle();
        });

    }
}(jQuery))