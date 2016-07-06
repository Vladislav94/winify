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

  // Dropdown
  var $dropdownBtn = $('.dropdown-show'),
      $dropdownWrap = $('.dropdown-wrap');

  $dropdownBtn.on('click', function(e){
    var dataDD = $(this).data('dropdown'),
        $thisWrap = $(this).closest('.dropdown-wrap');
    if (dataDD != undefined) {
      $('.'+dataDD).addClass('dropdown-open');
      $thisWrap.removeClass('dropdown-open');
      return false;
    };
    $('.dropdown-wrap.dropdown-open').not($thisWrap).removeClass('dropdown-open');
    $thisWrap.toggleClass('dropdown-open');
  });

  $('body').on('click', function(e){
    var target = e.target;
    if ($(target) != $('.dropdown-wrap') && target.closest('.dropdown-wrap') == null) {
      $('.dropdown-wrap.dropdown-open').removeClass('dropdown-open');
    };
  });
});