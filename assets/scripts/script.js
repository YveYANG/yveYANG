$(document).mousemove(function(e){
    $("#follow").css({left:e.pageX + 12, top:e.pageY +15});
});
    
var lessFour = $(this).width() * .25;
var lessThree = $(this).width() * .50;
var lessTwo = $(this).width() * .75;
var lessOne = $(this).width();

$(document).on('mousemove', function(e) {
    if ((e.pageX) < lessFour) {
        $("img").css('background-color', '#ffc8a1');
    }
    if (((e.pageX) > lessFour) && ((e.pageX) < lessThree)) {
    		$("img").css('background-color', '#fae68d');
    }
    if (((e.pageX) > lessThree) && ((e.pageX) < lessTwo)) {
    		$("img").css('background-color', '#97e1ae');
    }
    if (((e.pageX) > lessTwo) && ((e.pageX) < lessOne)) {
    		$("img").css('background-color', '#8fc7f8');
    } 
    else {
    }
});