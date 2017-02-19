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
        gif: '../../assets/spotninja.gif',
        tech: 'CSS, HTML, AJAX, PostgreSQL, Node, Express, jQuery, Javascript, Bootstrap',
        description: "Mobile first web application created to assist users in finding and storing their favorite parking spots around Denver, CO."
      },
      {
        title: 'Poetry Ipsum',
        url: 'https://poetry-ipsum.firebaseapp.com/',
        github: 'https://github.com/asherzog/Poetry-Ipsum',
        image: '../../assets/poetry.png',
        gif: '../../assets/poetry.gif',
        tech: 'AJAX, jQuery, JSON, CSS, Bootstrap, HTML, Javascript',
        description: "Generates Lorem Ipsum style filler text by combining random poem lines for a given poet. Users are given the option to select their favorite poet, number of paragraphs, or find new poets."
      },
      {
        title: 'DonorsComplete',
        url: 'https://donorscomplete.firebaseapp.com/',
        github: 'https://github.com/asherzog/DonorsComplete',
        image: '../../assets/donors.png',
        gif: '../../assets/donors.gif',
        tech: 'AJAX, Materialize CSS, jQuery, HTML, Javascript, JSON',
        description: "Web application built in hopes of increasing donor activity on the crowdfunding site 'Donors Choose' by reorginizing funding requests based on proximity to completion. Users also have the ability to search based on location."
      }
    ];

  }

}());
