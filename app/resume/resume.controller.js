(function() {
  'use strict';

  angular
    .module('app')
    .controller('resumeController', resumeController);

  function resumeController() {
    const vm = this;
    document.body.style.background = 'white';
  }

}());
