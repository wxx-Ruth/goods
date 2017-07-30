var header = {
    headerEl: $('#j-fixedHeader'),
    floorMod: $('.j-floor'),
    init: function () {
        this.headH = this.headerEl.height();
        this.bind();
    },
    bind: function () {
        var that = this;
        this.headerEl.on('click', '.nav-item', function () {
            $(this).addClass('active').siblings('.nav-item').removeClass('active');
            var index = $(this).index('.nav-item');
            var y = that.floorMod.eq(index).offset().top - that.headH;
            window.scrollTo(0, y);
        });
        this.scroll();
    },
    scroll: function () {
        var that = this;
        $(window).scroll(function () {
            var top = $(window).scrollTop();
            this.floorMod.each(function () {
                var item = $(this).offset().top;
                if (top + that.headH + 30 >= item) {
                    var index = $(this).index('.j-floor');
                    that.headerEl.find('.nav-item').eq(index).addClass('active').siblings().removeClass('active');
                }
            });
        }.bind(this));
    }
};
header.init();