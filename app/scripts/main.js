$(document).ready(function() {
// Tabs
  var $tabsList = $('.tabs-list');

  $tabsList.on('click', '.tabs-item', function() {
    var $this = $(this), 
        parentData = $this.parent().data('sections'),
        index = $this.index();

    $this.addClass('active').siblings().removeClass('active');

    $('.'+parentData).each(function(){
      $(this).children('.tabs-section').eq(index).addClass('active')
                     .siblings().removeClass('active');
    });
  });

  // Nav

  var $navClose = $('.header-nav__close'),
      $navOpen = $('.header-nav__open'),
      $nav = $('.header-nav');

  $navClose.on('click', function() {
    $nav.fadeOut();
  });

  $navOpen.on('click', function() {
    $nav.fadeIn();
  });
});