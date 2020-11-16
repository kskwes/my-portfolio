'use strict';

{
  const gridImg = document.querySelectorAll('.grid-img');
  // const modalImg = document.querySelectorAll('.modal-img');
  const mask = document.getElementById('mask');

  gridImg.forEach(function(hover) {
    hover.addEventListener('mouseover', function() {
      hover.classList.add('hover');
    });
    hover.addEventListener('mouseleave', function() {
      hover.classList.remove('hover');
    });

      hover.addEventListener('click', function() {
        mask.classList.remove('hidden');
        let modalImg = hover.nextElementSibling;
        modalImg.classList.remove('hidden');
      });

  });

    mask.addEventListener('click', () => {
      mask.classList.add('hidden');
      let modalImg = document.querySelectorAll('.modal-img');
      modalImg.forEach(function(hide) {
        hide.classList.add('hidden');
      })
    });

}
