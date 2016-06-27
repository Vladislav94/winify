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
});