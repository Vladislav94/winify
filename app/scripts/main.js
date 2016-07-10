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

  // settings
  var $settingSec = $('.settings-section'),
      $settingSb = $('.settings-sb'),
      $settingBody = $('.settings-body'),
      settingsH = [$settingSb.outerHeight(), $settingBody.outerHeight()];
      console.log(settingsH);

      addWidth();

      $(window).resize(function() {
        addWidth();
      });

      function addWidth() {
        if ($(window).width() < 768) {
          $settingSec.css('height', 'auto');
          $settingSb.css('height', 'auto');
          $settingBody.css('height', 'auto');
          return
        }
        var windowH = $(window).height(),
            headerH = $('.header').height(),
            sectionH = windowH - headerH;
        settingsH = [$settingSb.outerHeight(), $settingBody.outerHeight()];

        if (settingsH[0] > settingsH[1]) {
          settingBody.css('height', settingsH[0]+'px');
          if (settingsH[0] > sectionH) {
            $settingSec.css('height', 'auto');
          } else {
            $settingSec.css('height', sectionH+'px');
            $settingSb.css('height', sectionH+'px');
            $settingBody.css('height', sectionH+'px');
          }
        } else {
          $settingSb.css('height', settingsH[1]+'px');
          if (settingsH[1] > sectionH) {
            $settingSec.css('height', 'auto');
          } else {
            $settingSec.css('height', sectionH+'px');
            $settingSb.css('height', sectionH+'px');
            $settingBody.css('height', sectionH+'px');
          }
        }
        console.log();
      };
});