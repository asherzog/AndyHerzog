(function() {
  'use strict';

  angular
    .module('app')
    .controller('projectsController', projectsController);

  function projectsController() {
    const vm = this;
    document.body.style = `background: linear-gradient(35deg, #292c2b, #041340, #262d2b);
                            background-size: 600% 600%;

                            -webkit-animation: projects 17s ease infinite;
                            -moz-animation: projects 17s ease infinite;
                            animation: projects 17s ease infinite;`;
  }

}());
