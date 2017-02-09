(function() {
  'use strict';

  angular
    .module('app')
    .controller('headerController', headerController);

  function headerController() {
    const vm = this;

    let logo = new Vivus("logo", {type: 'oneByOne', duration: 200, file:'./assets/logo8.svg'}, finished);


    function finished(vivus) {
      if (vivus.currentFrame == 200) {
        $('#logo').on('mouseenter', () => {
          if (vivus.currentFrame == 200) {
            vivus.play(-5);
          }
        });
      } else {
        vivus.play(1);
      }
    }

  };

}());
