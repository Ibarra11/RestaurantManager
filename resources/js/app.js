// $('.js--section-header').waypoint(function(direction){
//     if(direction == 'down'){
//         $('nav').addClass('nav-bg');
//         $('img').removeClass('nav-logo');
//         $('img').addClass('nav-logo-sm');
//     }
//     else if(direction == 'up'){
//         $('nav').removeClass('nav-bg');
//         $('img').removeClass('nav-logo-sm');
//         $('img').addClass('nav-logo');
//     }
// },{
//     offset: -100
// })



$('.js-section-about').waypoint(function(direction){
    console.log(direction);
    console.log('Hello');
},{
    offset: '25%'
});