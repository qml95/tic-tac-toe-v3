var bodyElt = document.querySelector('body');
  var homePage = `
    <div class="screen screen-start" id="start">
      <header>
        <h1>Tic Tac Toe</h1>
        <a href="#" class="button btn-start" onclick=startGame()>Start game</a>
      </header>
    </div>
    `;
  bodyElt.innerHTML=homePage;
  var boardGame = `
  <div class="board" id="board">
    <header>
      <h1>Tic Tac Toe</h1>
      <ul>
        <li class="players player1"><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-200.000000, -60.000000)" fill="#000000"><g transform="translate(200.000000, 60.000000)"><path d="M21 36.6L21 36.6C29.6 36.6 36.6 29.6 36.6 21 36.6 12.4 29.6 5.4 21 5.4 12.4 5.4 5.4 12.4 5.4 21 5.4 29.6 12.4 36.6 21 36.6L21 36.6ZM21 42L21 42C9.4 42 0 32.6 0 21 0 9.4 9.4 0 21 0 32.6 0 42 9.4 42 21 42 32.6 32.6 42 21 42L21 42Z"/></g></g></g></svg></li>
        <li class="players player2"><svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-718.000000, -60.000000)" fill="#000000"><g transform="translate(739.500000, 81.500000) rotate(-45.000000) translate(-739.500000, -81.500000) translate(712.000000, 54.000000)"><path d="M30 30.1L30 52.5C30 53.6 29.1 54.5 28 54.5L25.5 54.5C24.4 54.5 23.5 53.6 23.5 52.5L23.5 30.1 2 30.1C0.9 30.1 0 29.2 0 28.1L0 25.6C0 24.5 0.9 23.6 2 23.6L23.5 23.6 23.5 2.1C23.5 1 24.4 0.1 25.5 0.1L28 0.1C29.1 0.1 30 1 30 2.1L30 23.6 52.4 23.6C53.5 23.6 54.4 24.5 54.4 25.6L54.4 28.1C54.4 29.2 53.5 30.1 52.4 30.1L30 30.1Z"/></g></g></g></svg></li>
      </ul>
    </header>
    <ul class="boxes">
      <li class="box" id="one" onclick="game(this)"></li>
      <li class="box" id="two" onclick="game(this)"></li>
      <li class="box" id="three" onclick="game(this)"></li>
      <li class="box" id="four" onclick="game(this)"></li>
      <li class="box" id="five" onclick="game(this)"></li>
      <li class="box" id="six" onclick="game(this)"></li>
      <li class="box" id="seven" onclick="game(this)"></li>
      <li class="box" id="eight" onclick="game(this)"></li>
      <li class="box" id="nine" onclick="game(this)"></li>
    </ul>
  </div>
  `;

function Player(nom){
  this.nom = nom;
}
var player1 = new Player1('jack');
var player2 = new Player2('doe');

function Player1(nom) {
  Player.call(this, nom);
  this.classname = 'box-filled-1';
}

function Player2(nom) {
  Player.call(this, nom);
  this.classname = 'box-filled-2';
}

function startGame() {
  var homePage = document.getElementById('start');
  homePage.remove();
  bodyElt.innerHTML=boardGame;

  var joueur1 = document.getElementsByClassName('players');
  joueur1[0].classList.remove('player1');
  joueur1[0].classList.add('active');
  joueur1[0].id = 'player1';
}

function chekFirtLine(classname) {
  return one.classList.contains(classname) && two.classList.contains(classname) && three.classList.contains(classname)
}
function chekSecondLine(classname) {
  return four.classList.contains(classname) && five.classList.contains(classname) && six.classList.contains(classname)
}
function chekThirdLine(classname) {
  return seven.classList.contains(classname) && eight.classList.contains(classname) && nine.classList.contains(classname)
}
function chekFirstColumn(classname) {
  return one.classList.contains(classname) && four.classList.contains(classname) && seven.classList.contains(classname)
}
function chekSecondColumn(classname) {
  return two.classList.contains(classname) && five.classList.contains(classname) && eight.classList.contains(classname)
}
function chekThirdcolumn(classname) {
  return three.classList.contains(classname) && six.classList.contains(classname) && nine.classList.contains(classname)
}
function chekFirstDiagonal(classname) {
  return one.classList.contains(classname) && five.classList.contains(classname) && nine.classList.contains(classname)
}
function chekSecondDiagonal(classname) {
  return three.classList.contains(classname) && five.classList.contains(classname) && seven.classList.contains(classname)
}

function aGagne(classname) {
  return chekFirtLine(classname) || chekSecondLine(classname) || chekThirdLine(classname) || chekFirstColumn(classname) || chekSecondColumn(classname) || chekThirdcolumn(classname) || chekFirstDiagonal(classname) || chekSecondDiagonal(classname)
}


function game(tour){
  var joueur1 = document.getElementById('player1');
  if (joueur1.classList.contains('active') && !tour.classList.contains('box-filled-2') && !tour.classList.contains('box-filled-1') ) {
        joueur1.classList.remove('active');
        joueur1.classList.add('player1');
        tour.classList.add('box-filled-1');
        var joueur2 = document.getElementsByClassName('players');
        joueur2[1].classList.remove('player2');
        joueur2[1].classList.add('active');
        joueur2[1].id = 'player2';


  } else if (!joueur1.classList.contains('active') && !tour.classList.contains('box-filled-1') && !tour.classList.contains('box-filled-2')) {
        var joueur2 = document.getElementById('player2');
        joueur2.classList.remove('active');
        joueur2.classList.add('player1');
        tour.classList.add('box-filled-2');
        var joueur1 = document.getElementsByClassName('players');
        joueur1[0].classList.remove('player1');
        joueur1[0].classList.add('active');
        joueur1[0].id = 'player1';
  } else {
        alert('case déja occupée. Veuillez en choisir une autre.');
  }

  var one = document.getElementById('one');
  var two = document.getElementById('two');
  var three = document.getElementById('three');
  var four = document.getElementById('four');
  var five = document.getElementById('five');
  var six = document.getElementById('six');
  var seven = document.getElementById('seven');
  var eight = document.getElementById('eight');
  var nine = document.getElementById('nine');

  if (aGagne(player1.classname)) {
    player1Win();
  } else if (aGagne(player2.classname)) {
    player2Win();
  }
}


function player1Win() {
  var playPage = document.getElementById('board');
  playPage.remove();
  var win1Elt = document.createElement('div');
  win1Elt.id = 'finish';
  win1Elt.setAttribute('class', 'screen screen-win screen-win-one');
  win1Elt.innerHTML = `
  <header>
    <h1>Tic Tac Toe</h1>
    <p class="message">Winner</p>
    <a href="#" class="button">New game</a>
  </header>
  `;
bodyElt.appendChild(win1Elt);
}
function player2Win() {
  var playPage = document.getElementById('board');
  playPage.remove();
  var win2Elt = document.createElement('div');
  win2Elt.id = 'finish';
  win2Elt.setAttribute('class', 'screen screen-win screen-win-two');
  win2Elt.innerHTML = `
  <header>
    <h1>Tic Tac Toe</h1>
    <p class="message">Winner</p>
    <a href="#" class="button">New game</a>
  </header>
  `;
}
