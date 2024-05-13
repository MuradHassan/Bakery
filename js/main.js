

/*navbar color*/

var heightSection = $('#about').offset().top;

$(window).scroll(function () {
    if ($(window).scrollTop() > 10 && $(window).width() > 992) {
        $('#navColor').css({ 'backgroundColor': '#353330', 'transition': '1s' })

    } else if ($(window).scrollTop() < 10 && $(window).width() > 992) {
        $('#navColor').css({ 'backgroundColor': 'transparent', 'transition': '1s' })
    }

    if ($(window).scrollTop() > heightSection) {
        $('.scrollBtn').fadeIn(500)
    }
    else {
        $('.scrollBtn').fadeOut(500)
    }
})

/*change link active */

$('.nav-link').click(function () {
    $('.nav-link').removeClass('active')
    $(this).addClass('active')
})


/*color box */

document.body.style.setProperty('--default-color', localStorage.getItem('defultColor'))
/*----------------*/
$('.colorBtn').click(function () {
    let currentWidth = $('.colors').outerWidth()
    if ($('.colorBox').css('right') == '0px') {
        $('.colorBox').animate({ 'right': -currentWidth }, 500)
    } else {
        $('.colorBox').animate({ 'right': '0px' }, 500)
    }

})
/*----------------*/
let colors = ['#8E7754', '#546b8e', '#548e77', '#77548e'];
for (let i = 0; i < colors.length; i++) {
    $('.color').eq(i).css('backgroundColor', colors[i])
}
/*----------------*/
$('.color').click(function () {
    let currentColor = $(this).css('backgroundColor');
    document.body.style.setProperty('--default-color', currentColor)
    localStorage.setItem('defultColor', currentColor)
})

/* loading page*/

$(document).ready(function () {
    $('#loadingPage').fadeOut(500, function () {
        $('body').css('overflow', 'visible')
    })

})