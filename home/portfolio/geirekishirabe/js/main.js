'use strict';
{
  const fieldLeft = document.getElementById('fieldLeft');
  const fieldRight = document.getElementById('fieldRight');

  const fieldLeftYear = document.getElementById('fieldLeftYear');
  const fieldRightYear = document.getElementById('fieldRightYear');

  const yearLeft1 = document.getElementById('yearLeft1');
  const yearLeft2 = document.getElementById('yearLeft2');
  const yearLeft3 = document.getElementById('yearLeft3');
  const yearLeft4 = document.getElementById('yearLeft4');
  const yearLeft5 = document.getElementById('yearLeft5');

  const yearRight1 = document.getElementById('yearRight1');
  const yearRight2 = document.getElementById('yearRight2');
  const yearRight3 = document.getElementById('yearRight3');
  const yearRight4 = document.getElementById('yearRight4');
  const yearRight5 = document.getElementById('yearRight5');

  const nameTextL1 = document.getElementById('nameLeft1').textContent;
  const nameTextL2 = document.getElementById('nameLeft2').textContent;
  const nameTextL3 = document.getElementById('nameLeft3').textContent;
  const nameTextL4 = document.getElementById('nameLeft4').textContent;
  const nameTextL5 = document.getElementById('nameLeft5').textContent;

  const nameTextR1 = document.getElementById('nameRight1').textContent;
  const nameTextR2 = document.getElementById('nameRight2').textContent;
  const nameTextR3 = document.getElementById('nameRight3').textContent;
  const nameTextR4 = document.getElementById('nameRight4').textContent;
  const nameTextR5 = document.getElementById('nameRight5').textContent;

  const yearTextL1 = document.getElementById('yearLeft1').textContent;
  const yearTextL2 = document.getElementById('yearLeft2').textContent;
  const yearTextL3 = document.getElementById('yearLeft3').textContent;
  const yearTextL4 = document.getElementById('yearLeft4').textContent;
  const yearTextL5 = document.getElementById('yearLeft5').textContent;

  const yearTextR1 = document.getElementById('yearRight1').textContent;
  const yearTextR2 = document.getElementById('yearRight2').textContent;
  const yearTextR3 = document.getElementById('yearRight3').textContent;
  const yearTextR4 = document.getElementById('yearRight4').textContent;
  const yearTextR5 = document.getElementById('yearRight5').textContent;

  class Team {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }

  const teamsL1 = new Team(nameTextL1, yearTextL1);
  const teamsL2 = new Team(nameTextL2, yearTextL2);
  const teamsL3 = new Team(nameTextL3, yearTextL3);
  const teamsL4 = new Team(nameTextL4, yearTextL4);
  const teamsL5 = new Team(nameTextL5, yearTextL5);

  const teamsR1 = new Team(nameTextR1, yearTextR1);
  const teamsR2 = new Team(nameTextR2, yearTextR2);
  const teamsR3 = new Team(nameTextR3, yearTextR3);
  const teamsR4 = new Team(nameTextR4, yearTextR4);
  const teamsR5 = new Team(nameTextR5, yearTextR5);

  const nameLeft1 = document.getElementById('nameLeft1');
  const nameLeft2 = document.getElementById('nameLeft2');
  const nameLeft3 = document.getElementById('nameLeft3');
  const nameLeft4 = document.getElementById('nameLeft4');
  const nameLeft5 = document.getElementById('nameLeft5');

  const nameRight1 = document.getElementById('nameRight1');
  const nameRight2 = document.getElementById('nameRight2');
  const nameRight3 = document.getElementById('nameRight3');
  const nameRight4 = document.getElementById('nameRight4');
  const nameRight5 = document.getElementById('nameRight5');

  const resultLeft = document.getElementById('resultLeft');
  const resultRight = document.getElementById('resultRight');

  function getJudgeLeft() {
    resultLeft.textContent = '先輩';
    resultRight.textContent = '後輩';
  }

  function getJudgeRight() {
    resultLeft.textContent = '後輩';
    resultRight.textContent = '先輩';
  }

  function getJudgeSame() {
    resultLeft.textContent = '同期';
    resultRight.textContent = '同期';
  }

  nameLeft1.addEventListener('click', () => {
    fieldLeft.textContent = teamsL1.name;
    fieldLeftYear.textContent = teamsL1.year;
  });

  nameLeft2.addEventListener('click', () => {
    fieldLeft.textContent = teamsL2.name;
    fieldLeftYear.textContent = teamsL2.year;
  });

  nameLeft3.addEventListener('click', () => {
    fieldLeft.textContent = teamsL3.name;
    fieldLeftYear.textContent = teamsL3.year;
  });

  nameLeft4.addEventListener('click', () => {
    fieldLeft.textContent = teamsL4.name;
    fieldLeftYear.textContent = teamsL4.year;
  });

  nameLeft5.addEventListener('click', () => {
    fieldLeft.textContent = teamsL5.name;
    fieldLeftYear.textContent = teamsL5.year;
  });

  nameRight1.addEventListener('click', () => {
    fieldRight.textContent = teamsR1.name;
    fieldRightYear.textContent = teamsR1.year;
  });

  nameRight2.addEventListener('click', () => {
    fieldRight.textContent = teamsR2.name;
    fieldRightYear.textContent = teamsR2.year;
  });

  nameRight3.addEventListener('click', () => {
    fieldRight.textContent = teamsR3.name;
    fieldRightYear.textContent = teamsR3.year;
  });

  nameRight4.addEventListener('click', () => {
    fieldRight.textContent = teamsR4.name;
    fieldRightYear.textContent = teamsR4.year;
  });

  nameRight5.addEventListener('click', () => {
    fieldRight.textContent = teamsR5.name;
    fieldRightYear.textContent = teamsR5.year;
  });

  const judgeButton = document.getElementById('judgeButton');
  judgeButton.addEventListener('click', () => {
    if (fieldLeftYear.textContent > fieldRightYear.textContent) {
      getJudgeLeft();
    } else if (fieldLeftYear.textContent < fieldRightYear.textContent) {
      getJudgeRight();
    } else if (fieldLeftYear.textContent == fieldRightYear.textContent) {
      getJudgeSame();
    }
  });

  const resetButton = document.getElementById('resetButton');
  resetButton.addEventListener('click', () => {
    fieldLeft.textContent = '?';
    fieldRight.textContent = '?';
    fieldLeftYear.textContent = '?';
    fieldRightYear.textContent = '?';
    resultLeft.textContent = '?';
    resultRight.textContent = '?';
  });
}
