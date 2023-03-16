$(function(){
    $(document).scroll(function(){
        var $nav = $('.nav');
        $nav.toggleclass('scrolled',$(this).scrolltop()>$nav.height());
    });
});