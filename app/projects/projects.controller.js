(function() {
  'use strict';

  angular
    .module('app')
    .controller('projectsController', projectsController);

  function projectsController() {
    const vm = this;
    document.body.style = `background: linear-gradient(53deg, #191d1c, #60a28c, #212a27);
                            background-size: 600% 600%;

                            -webkit-animation: project 23s ease infinite;
                            -moz-animation: project 23s ease infinite;
                            animation: project 23s ease infinite;`;
  }

}());
