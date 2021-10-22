//   滚动
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
//    变高度
$(function () {
    $('.chef').click(function () {
        $('.chef').toggleClass('chef-active')
    });
    $('.book-btn').click(function () {
        $('.serv').toggleClass('serv-active')
    });
});
