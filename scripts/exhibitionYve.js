$(function(){
    $('.capt').last().addClass('this');

    $('#resize').height(($(window).height() - $('.this').height()));
    $(window).resize(function () {
            $('#resize').height(($(window).height() - $('.this').height()));
    });

    $('.sticky').Stickyfill();

});
$(document).ready(function(){
    var num_li = $(".listing").size();
    var x=0;
    var INCREMENT = 7;
    var $groups = $('.listing');
    var $conceal = $('.conceal');
    getNextN($groups, x, INCREMENT).show();

    $("#loadMore").click(function() {
        var $hiddenGroup = getNextN($groups, x, INCREMENT);
            x+=INCREMENT;
            var $groupToShow = getNextN($groups, x, INCREMENT);
      $conceal.hide();
      $hiddenGroup.hide();
      $groupToShow.show();
            $("#showLess").show();
      if (x+INCREMENT >= num_li) $(this).hide();
    });

    $("#showLess").click(function() {
        var $hiddenGroup = getNextN($groups, x, INCREMENT);
            x-=INCREMENT;
            var $groupToShow = getNextN($groups, x, INCREMENT);
      $hiddenGroup.hide();
        $groupToShow.show();
      if (x == 0) $(this).hide();
      $("#loadMore").show();
      if (x == 0) $conceal.show();
    });

    function getNextN($el, x, n) {
        return $el.slice(x,x+n);
    }

        // REMOVE CLICK BUTTON TOGGLE  
    function remover() {
        if ($(window).width() < 800) {
            $('.mobileMenuEx .pastShow .show ul').removeClass('listing');
        }
        else {
            $('.mobileMenuEx .pastShow .show ul').addClass('listing');
        }
    }

    window.onresize = remover;
    window.onload = remover;

    // MENU
        $('#mobileMenuButton').click(function() {
            $('.mobileMenuWrap').addClass('fullHeight');
            $('.mobileMenuFour').show();
            $('.gridWrap').hide();
            $('.mobileMenuClose').removeClass('none');
                // Hide All other Menus
            $('.mobileMenuNews').hide();
            $('.mobileMenuArt').hide();
            $('.mobileMenuEx').hide();
        });
        $('#mobEx').click(function() {
            $('.mobileMenuFour').hide();
            $('.mobileMenuEx').show();
        });
        $('#mobNews').click(function() {
            $('.mobileMenuFour').hide();
            $('.mobileMenuNews').show();
        });
        $('#mobArt').click(function() {
            $('.mobileMenuFour').hide();
            $('.mobileMenuArt').show();
        });    

        $('#mobileMenuClose').click(function() {
            $('.mobileMenuWrap').removeClass('fullHeight');
            $('.gridWrap').show();
            $('.mobileMenuClose').addClass('none');
            $('.mobileMenuFour').hide();
            $('.mobileMenuNews').hide();
            $('.mobileMenuArt').hide();
            $('.mobileMenuEx').hide();
        });
});