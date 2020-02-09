$(function () {
    // 头部导航模块
    $(window).scroll(function () {
        if ($(document).scrollTop() > 0) {
            $('.header').addClass('header2');
            $('.top').slideDown(500);

        } else {
            $('.header').removeClass('header2');
            $('.top').slideUp(500);
        }
    })
    $('.top').click(function () {
        $('html,body').stop().animate({
            scrollTop: 0
        })
    })
    // 搜索区域
    // console.log($('.search input'));
    $('.search input').focus(function () {
        $(this).removeClass('add')
    })
    $('.search input').blur(function () {
        $(this).addClass('add')

    })
    // 攻略按钮
    $('#strategy').click(function () {
        location.href = 'null.html';
    })

})
