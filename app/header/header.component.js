(function() {
  'use strict';

  angular
    .module('app')
    .component('headerComponent', {
      controller: 'headerController',
      templateUrl: '../../app/header/header.template.html'
    });

}());
