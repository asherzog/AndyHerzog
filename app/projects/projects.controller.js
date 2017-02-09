(function() {
  'use strict';

  angular
    .module('app')
    .controller('projectsController', projectsController);

  function projectsController() {
    const vm = this;

    let flky = new Flickity( '.pics', {
      accessibility: true,
      adaptiveHeight: false,
      autoPlay: 10000,
      cellAlign: 'center',
      cellSelector: undefined,
      contain: false,
      draggable: true,
      dragThreshold: 3,
      freeScroll: false,
      friction: 0.2,
      groupCells: false,
      initialIndex: 0,
      lazyLoad: false,
      percentPosition: true,
      prevNextButtons: true,
      pageDots: true,
      resize: true,
      rightToLeft: false,
      setGallerySize: true,
      watchCSS: false,
      wrapAround: false
    });

    $('.list-group-item').click(changeItem);

    function changeItem() {
      let $carousel = $('.pics').flickity();
      let index = $(this).index();
      $carousel.flickity( 'select', index );
      let id = $(`#${this.id}`);
      id.siblings().removeClass('active');
      if (!id.hasClass('active')) {
        id.addClass('active');
      }
    }

  };

}());
