
///<reference types="../@types/jquery"/>

$('.open').click(function () {
    $('.left-navbar').animate({ width: '250px' }, 500)
    $('.home-content').animate({ marginLeft: '250px' }, 500)
})

$('.close').click(function () {
    $('.left-navbar').animate({ width: '0' }, 500)
    $('.home-content').animate({ marginLeft: '0px' }, 500)
})

$('.slide-toggle').click(function () {
    $('.slider-content div').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500)
})









var Max_character = 100;
$('.textarea').keyup(function(event) {

    let Lenth_of_character = $(this).val().length;

    let Reamining_character = Max_character - Lenth_of_character;

    if (Reamining_character <= 0) {
        $('#character').text('your available character finished');
        $('.remaining').text('');
        // Text_area.disabled=true;
        event.preventDefault();
    }
    else {
        $('#character').text(Reamining_character);
    }

})

// $('.textarea').on('keypress',function(e){
//     let textLength = $(this).val().length
//     if(textLength===100){
//         e.preventDefault();
//         $('#character').text('your available character finished');
//         $('.remaining').text('');

//     }
//     else{
//         Max_character--
//         $('#character').text(Max_character);

//     }
// })















window.onload = function () {
    countToTime('22 may 2025 11:59:00');
}
function countToTime(countTo) {
    let dateToCount = new Date(countTo);
    dateToCount = (dateToCount.getTime() / 1000);
    let day = new Date();
    day = (day.getTime() / 1000);
    let differenceTime = (dateToCount - day);
    let days = Math.floor(differenceTime / (24 * 60 * 60));
    let hours = Math.floor((differenceTime - (days * (24 * 60 * 60))) / 3600);
    let mins = Math.floor((differenceTime - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let secs = Math.floor((differenceTime - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)));

    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`);

    setInterval(function () {
        countToTime(countTo);
    }, 1000);
}
