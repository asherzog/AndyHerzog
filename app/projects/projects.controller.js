(function() {
  'use strict';

  angular
    .module('app')
    .controller('projectsController', projectsController);

  function projectsController() {
    const vm = this;
    document.body.style.background = `linear-gradient(118deg, #060a1d, #1e6369, #0a0d2d);`
    document.body.style.backgroundSize =  `600% 600%;`
    document.body.style.animation = `animation: project 24s ease infinite;`
                            // -webkit-animation: project 24s ease infinite;
                            // -moz-animation: project 24s ease infinite;

  }

}());
