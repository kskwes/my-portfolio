'use strict';

{
  const number = document.getElementById('number');
  const start = document.getElementById('start');
  const reset = document.getElementById('reset');
  const itemOne = document.getElementById('item-1');
  const itemTwo = document.getElementById('item-2');
  const itemThree = document.getElementById('item-3');
  const itemFour = document.getElementById('item-4');
  const itemFive = document.getElementById('item-5');
  const itemSix = document.getElementById('item-6');
  const itemSeven = document.getElementById('item-7');
  const itemEight = document.getElementById('item-8');
  const itemNine = document.getElementById('item-9');

  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');

  let arr = [];
  let min = 1;
  let max = 99;
  for(let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * (max + 1 - min)) + min);
  }

  let simArr = arr.filter(function(value, index, array) {
    return array.indexOf( value ) === index;
  });

  console.log(simArr);

  itemOne.textContent = simArr[0];
  itemTwo.textContent = simArr[1];
  itemThree.textContent = simArr[2];
  itemFour.textContent = simArr[3];
  itemSix.textContent = simArr[4];
  itemSeven.textContent = simArr[5];
  itemEight.textContent = simArr[6];
  itemNine.textContent = simArr[7];

  start.addEventListener('click', () => {
    let result = getRandom(1, 99);
    function getRandom( min, max ) {
        let random = Math.floor( Math.random() * (max + 1 - min) ) + min;
        return random;
    }
    number.textContent = result;
    switch (number.textContent) {
      case itemOne.textContent:
        itemOne.classList.add('colored');
        break;
      case itemTwo.textContent:
        itemTwo.classList.add('colored');
        break;
      case itemThree.textContent:
        itemThree.classList.add('colored');
        break;
      case itemFour.textContent:
        itemFour.classList.add('colored');
        break;
      case itemSix.textContent:
        itemSix.classList.add('colored');
        break;
      case itemSeven.textContent:
        itemSeven.classList.add('colored');
        break;
      case itemEight.textContent:
        itemEight.classList.add('colored');
        break;
      case itemNine.textContent:
        itemNine.classList.add('colored');
        break;
    }

    function getModalWindow() {
      modal.classList.remove('hidden');
      mask.classList.remove('hidden');
    }

    if(itemOne.classList.contains('colored') && itemTwo.classList.contains('colored') && itemThree.classList.contains('colored')) {
      getModalWindow();
    } else if (itemFour.classList.contains('colored') && itemFive.classList.contains('colored') && itemSix.classList.contains('colored')) {
      getModalWindow();
    } else if (itemSeven.classList.contains('colored') && itemEight.classList.contains('colored') && itemNine.classList.contains('colored')) {
      getModalWindow();
    } else if (itemOne.classList.contains('colored') && itemFive.classList.contains('colored') && itemNine.classList.contains('colored')) {
      getModalWindow();
    } else if (itemOne.classList.contains('colored') && itemFour.classList.contains('colored') && itemSeven.classList.contains('colored')) {
      getModalWindow();
    } else if (itemTwo.classList.contains('colored') && itemFive.classList.contains('colored') && itemEight.classList.contains('colored')) {
      getModalWindow();
    } else if (itemThree.classList.contains('colored') && itemSix.classList.contains('colored') && itemNine.classList.contains('colored')) {
      getModalWindow();
    } else if (itemThree.classList.contains('colored') && itemFive.classList.contains('colored') && itemSeven.classList.contains('colored')) {
      getModalWindow();
    }
  });

  close.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });

  reset.addEventListener('click', () => {
    number.textContent = '';
    itemOne.classList.remove('colored');
    itemTwo.classList.remove('colored');
    itemThree.classList.remove('colored');
    itemFour.classList.remove('colored');
    itemSix.classList.remove('colored');
    itemSeven.classList.remove('colored');
    itemEight.classList.remove('colored');
    itemNine.classList.remove('colored');

    let arr = [];
    let min = 1;
    let max = 99;
    for(let i = 0; i < 100; i++) {
      arr.push(Math.floor(Math.random() * (max + 1 - min)) + min);
    }

    let simArr = arr.filter(function(value, index, array) {
      return array.indexOf( value ) === index;
    });

    console.log(simArr);

    itemOne.textContent = simArr[0];
    itemTwo.textContent = simArr[1];
    itemThree.textContent = simArr[2];
    itemFour.textContent = simArr[3];
    itemSix.textContent = simArr[4];
    itemSeven.textContent = simArr[5];
    itemEight.textContent = simArr[6];
    itemNine.textContent = simArr[7];
  });

}
