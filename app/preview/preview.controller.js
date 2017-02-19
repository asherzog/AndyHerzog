(function() {
  'use strict';

  angular
    .module('app')
    .controller('previewController', previewController);

  function previewController() {
    const vm = this;

    vm.projects = [
      {
        title: 'Spot Ninja',
        url: 'https://spot-ninja.firebaseapp.com/',
        github: 'https://github.com/teamBetterThanAwesome/Spot-NinjaFrontEnd',
        image: '../../assets/spotninja.png',
        gif: '../../assets/spotninja.gif'
      },
      {
        title: 'Poetry Ipsum',
        url: 'https://poetry-ipsum.firebaseapp.com/',
        github: 'https://github.com/asherzog/Poetry-Ipsum',
        image: '../../assets/poetry.png',
        gif: '../../assets/poetry.gif'
      },
      {
        title: 'DonorsComplete',
        url: 'https://donorscomplete.firebaseapp.com/',
        github: 'https://github.com/asherzog/DonorsComplete',
        image: '../../assets/donors.png',
        gif: '../../assets/donors.gif'
      }
    ];

  }

}());
