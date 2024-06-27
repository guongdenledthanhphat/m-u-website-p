/*Slider function [It is recommended to place a function in a separate JS file, such as "functions.js"]*/
function myCoolSlider() {
        $('#featured-content').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }]
        });
    }
    /*End of Slider function*/



$(document).ready(function() {

  
/*Calling the function [It is recommended to call a function in a separate JS file, such as "scripts.js"]*/
    myCoolSlider();
/*.................End of call*/


});
