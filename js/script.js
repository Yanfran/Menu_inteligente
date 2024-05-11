$(document).ready(function(){
$('.menu-button p').click(function() {	
var clicks = $(this).data('clicks');
if (clicks) {		
//// second click

$(".menu-button p").removeClass("opened");
setTimeout(function(){
	   $(".cir-menu-left li:nth-child(1)").addClass("opzero");
	}, 200);
	setTimeout(function(){
	   $(".cir-menu-left li:nth-child(2)").addClass("opzero");
	}, 250);
	setTimeout(function(){
	   $(".cir-menu-left li:nth-child(3)").addClass("opzero");
	}, 300);
	setTimeout(function(){
	   $(".cir-menu-right li:nth-child(5)").addClass("opzero");
       $(".df-cir").addClass("opzero");
	}, 350);
    setTimeout(function(){
	   $(".cir-menu-right li:nth-child(4)").addClass("opzero");
	   $(".menu-button").removeClass("circlex");
	   $(".cir-menu-left ul").removeClass("hf-cl");
	   
	}, 400);
    setTimeout(function(){
	   $(".cir-menu-right li:nth-child(3)").addClass("opzero");
       $(".menu-button").removeClass("circle");
	}, 450);
	setTimeout(function(){
	   $(".cir-menu-right li:nth-child(2)").addClass("opzero");
	   $("ul.first-submenu").addClass("hf-start");
	}, 500);
	setTimeout(function(){
	   $(".cir-menu-right li:nth-child(1)").addClass("opzero");
       $(".cir-menu-left ul").removeClass("first-dm");
	}, 550);
	setTimeout(function(){
	   $(".menu-button").removeClass("clicked");
	}, 750);
	setTimeout(function(){
       $(".menu-button p").text("MENU");
	}, 900);

	setTimeout(function(){
		$(".cir-menu-right").removeClass("cir-menu-right-yan");
		$('.cir-menu-left').removeClass("cir-menu-left-yan");
	},900)	

	// $('.cir-menu-right').css('background-image','none!important');
	
  } else {
		
	$('.cir-menu-right').addClass('cir-menu-right-yan');
	$('.cir-menu-left').addClass('cir-menu-left-yan');	

	// $('.dmenu-i').hover(function(){
	// 	$(this).css('color','#000!important');
	// }, function(){
	// 	$(this).css('color','red!important');
	// });

//// first click
    //$("ul.first-submenu").addClass("hf-clbg");
  	$(".menu-button").addClass("clicked");
    $(".menu-button p").text("x");
        setTimeout(function(){
	 $("ul.first-submenu").removeClass("hf-start");
	 $(".cir-menu-left ul").addClass("hf-cl");
	}, 100);
    setTimeout(function(){
	  $("ul.first-submenu").addClass("hf-clbgex");
	}, 150);  
    setTimeout(function(){
	   $(".menu-button").addClass("circle");
	}, 200);
	setTimeout(function(){
    $("ul.first-submenu").removeClass("hf-clbgex");
    }, 400);
	setTimeout(function(){
	   $(".menu-button").addClass("circlex");
	   $(".menu-button").removeClass("hf-start");
	}, 550);
	setTimeout(function(){
	   $(".cir-menu-left li:nth-child(3)").removeClass("opzero");
	   $("ul.first-submenu").removeClass("opzero");
  	   $("ul.first-submenu").removeClass("nonex");
	}, 600);
	setTimeout(function(){
	   $(".cir-menu-left li:nth-child(2)").removeClass("opzero");
	}, 650);
	setTimeout(function(){
		
	   $(".cir-menu-left li:nth-child(1)").removeClass("opzero");
	}, 700);
	setTimeout(function(){
	   $(".cir-menu-right li:nth-child(1)").removeClass("opzero");
	}, 750);
    setTimeout(function(){
	   $(".cir-menu-right li:nth-child(2)").removeClass("opzero");
	   $("ul.first-submenu").addClass("hf-cl");
	}, 800);
    setTimeout(function(){
	   $(".cir-menu-right li:nth-child(3)").removeClass("opzero");
	}, 700);
	setTimeout(function(){
	   $(".cir-menu-right li:nth-child(4)").removeClass("opzero");
	}, 850);
	setTimeout(function(){
	   $(".cir-menu-right li:nth-child(5)").removeClass("opzero");
	}, 900);
	setTimeout(function(){
	   $(".df-cir").removeClass("opzero");
	   $(".menu-button p").addClass("opened");
	}, 750);  }





  $(this).data("clicks", !clicks);
});
});

///////////////////////////////////////////////////////////////////////////////////

/// rotate x

$(document).ready(function(){
$('.menu-button p').click(function() {
$(this).toggleClass("flip");
});

///////////////////////////////////////////////////////////////////////////////////

//// Globle menu Click

$('.cir-menu-right li').click(function() {
	
});


///////////////////////////////////////////////////////////////////////////////////

//// menu 1
$('.dmenu-i').on('click', function(){
    $('.target').removeClass('selected');
    $(this).addClass('selected');

	$('.dmenu-ii').css("background", "#626262")
	$('.dmenu-iii').css("background", "#6c6c6c")
	$('.dmenu-iv').css("background", "#626262")
	$('.dmenu-v').css("background", "#6c6c6c")
	$('.target.selected').css("background", "#ffc338")
});

$('.dmenu-ii').on('click', function(){
    $('.target').removeClass('selected');
    $(this).addClass('selected');

	$('.dmenu-i').css("background", "#6c6c6c")
	$('.dmenu-iii').css("background", "#6c6c6c")
	$('.dmenu-iv').css("background", "#626262")
	$('.dmenu-v').css("background", "#6c6c6c")
	$('.target.selected').css("background", "#4caf50")
});

$('.dmenu-iii').on('click', function(){
    $('.target').removeClass('selected');
    $(this).addClass('selected');

	$('.dmenu-i').css("background", "#6c6c6c")
	$('.dmenu-ii').css("background", "#626262")	
	$('.dmenu-iv').css("background", "#626262")
	$('.dmenu-v').css("background", "#6c6c6c")
	$('.target.selected').css("background", "#673ab7")
});

$('.dmenu-iv').on('click', function(){
    $('.target').removeClass('selected');
    $(this).addClass('selected');

	$('.dmenu-i').css("background", "#6c6c6c")
	$('.dmenu-ii').css("background", "#626262")
	$('.dmenu-iii').css("background", "#6c6c6c")	
	$('.dmenu-v').css("background", "#6c6c6c")
	$('.target.selected').css("background", "#009688")
});

$('.dmenu-v').on('click', function(){
    $('.target').removeClass('selected');
    $(this).addClass('selected');

	$('.dmenu-i').css("background", "#6c6c6c")
	$('.dmenu-ii').css("background", "#626262")
	$('.dmenu-iii').css("background", "#6c6c6c")
	$('.dmenu-iv').css("background", "#626262")	
	$('.target.selected').css("background", "#ff6700")
});

$('li.dmenu-i').click(function() {
$('ul.first-submenu li.smenu-i').addClass("inv");

setTimeout(function(){
$('ul.first-submenu li.smenu-i').addClass("inv");
}, 50);
setTimeout(function(){
$('ul.first-submenu li.smenu-ii').addClass("inv");
}, 100);
setTimeout(function(){
$('ul.first-submenu li.smenu-iii').addClass("inv");
}, 150);

setTimeout(function(){
$('ul.first-submenu').addClass("nonex");
$('.cir-menu-left ul').removeClass("nonex");
$('.cir-menu-left ul').removeClass("opzero");
$('.cir-menu-left ul li').addClass("inv");
}, 500);

setTimeout(function(){
$('ul.two-submenu li.smenu-i').removeClass("inv");
}, 700);
setTimeout(function(){
$('ul.two-submenu li.smenu-ii').removeClass("inv");
}, 750);
setTimeout(function(){
$('ul.two-submenu li.smenu-iii').removeClass("inv");
}, 800);

});






$('li.dmenu-ii').click(function() {
setTimeout(function(){
$('ul.two-submenu li.smenu-i').addClass("inv");
}, 50);
setTimeout(function(){
$('ul.two-submenu li.smenu-ii').addClass("inv");
}, 100);
setTimeout(function(){
$('ul.two-submenu li.smenu-iii').addClass("inv");
}, 150);

setTimeout(function(){
$('ul.two-submenu').addClass("nonex");
$('.cir-menu-left ul').removeClass("nonex");
$('.cir-menu-left ul').removeClass("opzero");
$('.cir-menu-left ul li').addClass("inv");
}, 500);

setTimeout(function(){
$('ul.three-submenu li.smenu-i').removeClass("inv");
}, 700);
setTimeout(function(){
$('ul.three-submenu li.smenu-ii').removeClass("inv");
}, 750);
setTimeout(function(){
$('ul.three-submenu li.smenu-iii').removeClass("inv");
}, 800);

});





$('li.dmenu-iii').click(function() {
setTimeout(function(){
$('ul.three-submenu li.smenu-i').addClass("inv");
}, 50);
setTimeout(function(){
$('ul.three-submenu li.smenu-ii').addClass("inv");
}, 100);
setTimeout(function(){
$('ul.three-submenu li.smenu-iii').addClass("inv");
}, 150);

setTimeout(function(){
$('ul.three-submenu').addClass("nonex");
$('.cir-menu-left ul').removeClass("nonex");
$('.cir-menu-left ul').removeClass("opzero");
$('.cir-menu-left ul li').addClass("inv");
}, 500);

setTimeout(function(){
$('ul.four-submenu li.smenu-i').removeClass("inv");
}, 700);
setTimeout(function(){
$('ul.four-submenu li.smenu-ii').removeClass("inv");
}, 750);
setTimeout(function(){
$('ul.four-submenu li.smenu-iii').removeClass("inv");
}, 800);

});


$('li.dmenu-iv').click(function() {
setTimeout(function(){
$('ul.four-submenu li.smenu-i').addClass("inv");
}, 50);
setTimeout(function(){
$('ul.four-submenu li.smenu-ii').addClass("inv");
}, 100);
setTimeout(function(){
$('ul.four-submenu li.smenu-iii').addClass("inv");
}, 150);

setTimeout(function(){
$('ul.four-submenu').addClass("nonex");
$('.cir-menu-left ul').removeClass("nonex");
$('.cir-menu-left ul').removeClass("opzero");
$('.cir-menu-left ul li').addClass("inv");
}, 500);

setTimeout(function(){
$('ul.five-submenu li.smenu-i').removeClass("inv");
}, 700);
setTimeout(function(){
$('ul.five-submenu li.smenu-ii').removeClass("inv");
}, 750);
setTimeout(function(){
$('ul.five-submenu li.smenu-iii').removeClass("inv");
}, 800);

});


$('li.dmenu-v').click(function() {
setTimeout(function(){
$('ul.five-submenu li.smenu-i').addClass("inv");
}, 50);
setTimeout(function(){
$('ul.five-submenu li.smenu-ii').addClass("inv");
}, 100);
setTimeout(function(){
$('ul.five-submenu li.smenu-iii').addClass("inv");
}, 150);

setTimeout(function(){
$('ul.five-submenu').addClass("nonex");
$('.cir-menu-left ul').removeClass("nonex");
$('.cir-menu-left ul').removeClass("opzero");
$('.cir-menu-left ul li').addClass("inv");
}, 500);

setTimeout(function(){
$('ul.six-submenu li.smenu-i').removeClass("inv");
}, 700);
setTimeout(function(){
$('ul.six-submenu li.smenu-ii').removeClass("inv");
}, 750);
setTimeout(function(){
$('ul.six-submenu li.smenu-iii').removeClass("inv");
}, 800);

});




$('.cir-menu-right li.dmenu-i').click(function() {

$('body.main').removeClass("page-voilet");
$('body.main').removeClass("page-dgreen");
$('body.main').removeClass("page-orange");
$('body.main').removeClass("page-green");
$('body.main').addClass("page-yellow");


setTimeout(function(){
$('.cir-menu-left ul').removeClass("hf-cl");
}, 300);
// setTimeout(function(){
// $('.cir-menu-left').removeClass("mdenueffx");
// $('.cir-menu-left').addClass("mdenueff");
// }, 750);
// setTimeout(function(){
// $('.cir-menu-left').addClass("mdenueffx");
// }, 1120);
// setTimeout(function(){
// $('.cir-menu-left').removeClass("mdenueff");
// $('.cir-menu-left').removeClass("mdenueffx");
// }, 1550);

setTimeout(function(){
$(".cir-menu-left ul.two-submenu").addClass("hf-cl");
}, 800);

});




$('.cir-menu-right li.dmenu-ii').click(function() {

$('body.main').removeClass("page-voilet");
$('body.main').removeClass("page-dgreen");
$('body.main').removeClass("page-orange");
$('body.main').removeClass("page-yellow");
$('body.main').addClass("page-green");

setTimeout(function(){
$('.cir-menu-left ul').removeClass("hf-cl");
}, 300);
// setTimeout(function(){
// $('.cir-menu-left').removeClass("mdenueffx");
// $('.cir-menu-left').addClass("mdenueff");
// }, 650);
// setTimeout(function(){
// $(".cir-menu-left ul.three-submenu").addClass("hf-cl");
// $('.cir-menu-left').addClass("mdenueffx");
// }, 950);
// setTimeout(function(){
// $('.cir-menu-left').removeClass("mdenueff");
// $('.cir-menu-left').removeClass("mdenueffx");
// }, 1250);

setTimeout(function(){
$(".cir-menu-left ul.three-submenu").addClass("hf-cl");
}, 900);
});





$('.cir-menu-right li.dmenu-iii').click(function() {

$('body.main').removeClass("page-dgreen");
$('body.main').removeClass("page-orange");
$('body.main').removeClass("page-yellow");
$('body.main').removeClass("page-green");
$('body.main').addClass("page-voilet");
setTimeout(function(){
$('.cir-menu-left ul').removeClass("hf-cl");
}, 300);
// setTimeout(function(){
// $('.cir-menu-left').removeClass("mdenueffx");
// $('.cir-menu-left').addClass("mdenueff");
// }, 650);
// setTimeout(function(){
// $(".cir-menu-left ul.four-submenu").addClass("hf-cl");
// $('.cir-menu-left').addClass("mdenueffx");
// }, 950);
// setTimeout(function(){
// $('.cir-menu-left').removeClass("mdenueff");
// $('.cir-menu-left').removeClass("mdenueffx");
// }, 1250);

setTimeout(function(){
$(".cir-menu-left ul.four-submenu").addClass("hf-cl");
}, 900);
});






$('.cir-menu-right li.dmenu-iv').click(function() {

$('body.main').removeClass("page-orange");
$('body.main').removeClass("page-yellow");
$('body.main').removeClass("page-green");
$('body.main').removeClass("page-voilet");
$('body.main').addClass("page-dgreen");

setTimeout(function(){
$('.cir-menu-left ul').removeClass("hf-cl");
}, 300);
// setTimeout(function(){
// $('.cir-menu-left').removeClass("mdenueffx");
// $('.cir-menu-left').addClass("mdenueff");
// }, 650);
// setTimeout(function(){
// $(".cir-menu-left ul.five-submenu").addClass("hf-cl");
// $('.cir-menu-left').addClass("mdenueffx");
// }, 950);
// setTimeout(function(){
// $('.cir-menu-left').removeClass("mdenueff");
// $('.cir-menu-left').removeClass("mdenueffx");
// }, 1250);

setTimeout(function(){
$(".cir-menu-left ul.five-submenu").addClass("hf-cl");
}, 900);
});




$('.cir-menu-right li.dmenu-v').click(function() {
$('body.main').removeClass("page-yellow");
$('body.main').removeClass("page-green");
$('body.main').removeClass("page-voilet");
$('body.main').removeClass("page-dgreen");
$('body.main').addClass("page-orange");

setTimeout(function(){
$('.cir-menu-left ul').removeClass("hf-cl");
}, 300);
// setTimeout(function(){
// $('.cir-menu-left').removeClass("mdenueffx");
// $('.cir-menu-left').addClass("mdenueff");
// }, 650);
// setTimeout(function(){
// $(".cir-menu-left ul.six-submenu").addClass("hf-cl");
// $('.cir-menu-left').addClass("mdenueffx");
// }, 950);
// setTimeout(function(){
// $('.cir-menu-left').removeClass("mdenueff");
// $('.cir-menu-left').removeClass("mdenueffx");
// }, 1250);

setTimeout(function(){
$(".cir-menu-left ul.six-submenu").addClass("hf-cl");
}, 900);
});


$(document).mouseup(function(e) 
{
    var container = $(".main-circle");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
$('body.main').removeClass("page-yellow");
$('body.main').removeClass("page-green");
$('body.main').removeClass("page-voilet");
$('body.main').removeClass("page-dgreen");
$('body.main').removeClass("page-orange");
    }
});

});