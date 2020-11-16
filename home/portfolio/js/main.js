'use strict';

{
  const open01 = document.getElementById('open01');
  const open02 = document.getElementById('open02');
  const open03 = document.getElementById('open03');
  const open04 = document.getElementById('open04');
  const open05 = document.getElementById('open05');
  const open06 = document.getElementById('open06');
  const open07 = document.getElementById('open07');

  const modal01 = document.getElementById('modal01');
  const modal02 = document.getElementById('modal02');
  const modal03 = document.getElementById('modal03');
  const modal04 = document.getElementById('modal04');
  const modal05 = document.getElementById('modal05');
  const modal06 = document.getElementById('modal06');
  const modal07 = document.getElementById('modal07');
  const modal08 = document.getElementById('modal08');

  const fruit = document.getElementById('fruit');

  const mask = document.getElementById('mask');

  const game = document.getElementById('game');
  const arrFruits = ['./img/apple.png', './img/banana.png', './img/grape.png', './img/lemon.png', './img/melon.png', './img/orange.png', './img/peach.png', './img/pine.png', './img/strawberry.png', './img/watermelon.png'];
  const fruitImg = document.getElementById('fruit-img');

  open01.addEventListener('click', () => {
    modal01.classList.remove('hidden');
    mask.classList.remove('hidden');
  });
  // open02.addEventListener('click', () => {
  //   modal02.classList.remove('hidden');
  //   mask.classList.remove('hidden');
  // });
  open03.addEventListener('click', () => {
    modal03.classList.remove('hidden');
    mask.classList.remove('hidden');
  });
  open04.addEventListener('click', () => {
    modal04.classList.remove('hidden');
    mask.classList.remove('hidden');
  });
  // open05.addEventListener('click', () => {
  //   modal05.classList.remove('hidden');
  //   mask.classList.remove('hidden');
  // });
  // open06.addEventListener('click', () => {
  //   modal06.classList.remove('hidden');
  //   mask.classList.remove('hidden');
  // });
  // open07.addEventListener('click', () => {
  //   modal07.classList.remove('hidden');
  //   mask.classList.remove('hidden');
  // });

  game.addEventListener('click', () => {
    modal08.classList.remove('hidden');
    mask.classList.remove('hidden');
    let rand = Math.floor(Math.random() * 100) + 1;
      if(rand >= 1 && rand <= 10) {
        fruit.textContent = 'いちご（きょうもかわいい）';
        fruitImg.src = arrFruits[8];
      } else if(rand >= 11 && rand <= 20) {
        fruit.textContent = 'りんご（やさしいきもちだね）';
        fruitImg.src = arrFruits[0];
      } else if(rand >= 21 && rand <= 30) {
        fruit.textContent = 'ぶどう（きみはおとななかんじ）';
        fruitImg.src = arrFruits[2];
      } else if(rand >= 31 && rand <= 40) {
        fruit.textContent = 'みかん（みんなでたべる）';
        fruitImg.src = arrFruits[5];
      } else if(rand >= 41 && rand <= 50) {
        fruit.textContent = 'すいか（ぼうでねらわれる！）';
        fruitImg.src = arrFruits[9];
      } else if(rand >= 51 && rand <= 60) {
        fruit.textContent = 'めろん（おかねもち〜）';
        fruitImg.src = arrFruits[4];
      } else if(rand >= 61 && rand <= 70) {
        fruit.textContent = 'もも（ふわふわ〜）';
        fruitImg.src = arrFruits[6];
      } else if(rand >= 71 && rand <= 80) {
        fruit.textContent = 'ばなな（えねるぎー！）';
        fruitImg.src = arrFruits[1];
      } else if(rand >= 81 && rand <= 90) {
        fruit.textContent = 'ぱいなっぷる（なんごくきぶん）';
        fruitImg.src = arrFruits[7];
      } else if(rand >= 91 && rand <= 100) {
        fruit.textContent = 'れもん（ほろにがいおもいで）';
        fruitImg.src = arrFruits[3];
      }
  });

  mask.addEventListener('click', () => {
    modal01.classList.add('hidden');
    // modal02.classList.add('hidden');
    modal03.classList.add('hidden');
    modal04.classList.add('hidden');
    // modal05.classList.add('hidden');
    // modal06.classList.add('hidden');
    // modal07.classList.add('hidden');
    modal08.classList.add('hidden');
    mask.classList.add('hidden');
  });
}
