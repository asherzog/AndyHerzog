(function() {
  'use strict';

  angular
    .module('app')
    .controller('contactController', contactController);

  function contactController() {
    const vm = this;
    document.body.style.background = 'white';
  }

}());
