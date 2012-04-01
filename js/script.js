/* Author:

*/

(function($) {

  var isHome = $('body.home').length;

  if (isHome) {
    var backgroundImages = $('#backgrounds').find('img'),
        totalBackgroundImages = backgroundImages.length,
        backgroundIndex = totalBackgroundImages - 1,
        backgroundTimeToSwitch = 4000,
        backgroundTimer;
    function switchBackground() {
      backgroundIndex += 1;
      if (backgroundIndex === totalBackgroundImages) {
        backgroundIndex = 0;
      }
      backgroundImages
        .eq(backgroundIndex).fadeIn()
        .siblings().fadeOut();
      backgroundTimer = setTimeout(switchBackground, backgroundTimeToSwitch);
    }
    backgroundTimer = setTimeout(switchBackground, backgroundTimeToSwitch);
  }

})(jQuery);

