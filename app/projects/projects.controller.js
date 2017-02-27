(function() {
  'use strict';

  angular
    .module('app')
    .controller('projectsController', projectsController);

  function projectsController() {
    const vm = this;
    document.body.style.backgroundColor = null;
    document.body.classList.add('project-class')
    // document.body.style = `background: linear-gradient(118deg, #060a1d, #1e6369, #0a0d2d);
    //                         background-size: 600% 600%;
    //
    //                         -webkit-animation: project 24s ease infinite;
    //                         -moz-animation: project 24s ease infinite;
    //                         animation: project 24s ease infinite;`;
  }

}());
