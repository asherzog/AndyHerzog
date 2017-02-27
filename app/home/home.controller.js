(function() {
  'use strict';

  angular
    .module('app')
    .controller('homeController', homeController);

  function homeController() {
    const vm = this;
    document.body.style.background = 'white';
    document.body.className = '';

    vm.logos = [
      'https://angular.io/resources/images/logos/angular2/angular.png',
      'http://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
      'http://www.bobbyberberyan.com/wp-content/uploads/2012/03/HTML5CSS3Logos.svg'
    ];

  };

}());
