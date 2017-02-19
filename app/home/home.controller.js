(function() {
  'use strict';

  angular
    .module('app')
    .controller('homeController', homeController);

  function homeController() {
    const vm = this;
    document.body.style.background = 'white';
  };

}());
