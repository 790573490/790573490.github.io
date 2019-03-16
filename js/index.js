/*修改轮播图时间*/



$(function () {
    //轮播图时间
    $('.carousel').carousel({
        interval: 3000,
    });


    banner();
    //动态设置ul的宽度
    setWidth();


    //触屏轮播图
    //触屏开始 停止定时器 记录起始坐标
    //触屏移动：记录移动距离  计算距离差
    //触屏结束：判断滑动方向，让轮播图切换
    function banner() {

        var startX = 0;
        var moveX = 0;
        var distanceX = 0;
        $('.wjs-banner').on('touchstart',function (e) {
            console.log('1');
            //停止自动播放
            $('.carousel').carousel('pause');
            startX = e.originalEvent.targetTouches[0].clientX;
        });
        $('.wjs-banner').on('touchmove',function (e) {
            moveX = e.originalEvent.targetTouches[0].clientX;
            distanceX = moveX - startX;
            console.log('2');
        });
        $('.wjs-banner').on('touchend',function (e) {
            if(distanceX > 0){
                console.log("上一张");
                $('.carousel').carousel('prev');
            }
            if(distanceX < 0){
                console.log("下一张");
                $('.carousel').carousel('next');
            }
            console.log(distanceX);

            startX = 0;
            moveX = 0;
            distanceX = 0;
            //触屏结束后自动播放
            $('.carousel').carousel('cycle');
        });

    }

    function setWidth() {
        var width = 0;
        $('.wjs-product .product-tabs li').each(function (i, e) {
            width += $(this).outerWidth(true);//累加所有li的宽度
        });
        console.log(width);
        $('.wjs-product .product-tabs').width(width);
    }


});
