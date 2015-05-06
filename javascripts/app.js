/*Cambio de fondo en el nav */

$(document).on("scroll",function(){
    if($(document).scrollTop()>100){
        $(".navbar-default").removeClass(".background-color-orange-red").addClass(".color-skyblue-light-personalized");
    } else{
        $(".navbar-default").removeClass(".color-skyblue-light-personalized").addClass(".background-color-orange-red");
    }
});

/*End nav-change*/

/*Circle Hover */
$('.circle-orange').hover(function() {
		$(".circle-text").toggleClass('hidden');
		$(".circle-text-hover").toggleClass("hidden");
	});

/*End Circle Hover*/