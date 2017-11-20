//global variable declaration
var bodyElt = document.querySelector('body');
//function board for page home
var board = (function() {
  return {
    home:function() {
      var pageStartElt = document.createElement('div');
      pageStartElt.id = "start";
      pageStartElt.setAttribute('class', 'screen screen-start');
      pageStartElt.innerHTML = `
      <header>
        <h1>
          Tic Tac Toe
        </h1>
        <a href="#" class="button" onclick=startGame()>
          Start game
        </a>
      </header>
      `;
      bodyElt.appendChild(pageStartElt);

      // prompt('entrez le nom du joueur O');

    }

  };

}());
board.home();// fin de la fonction pagehome

//function startGame
function startGame() {
  // var joueurO = prompt('entrez le nom du joueur O');
  // var joueurX = prompt('entrez le nom du joueur X');
  var homePage = document.getElementById('start');
  homePage.remove();
  var pageStartGameElt = document.createElement('div');
  pageStartGameElt.id = 'board';
  pageStartGameElt.setAttribute('class', 'board');
  pageStartGameElt.innerHTML = `
  <header>
    <h1>Tic Tac Toe</h1>
    <ul>
      <li class="players player1"><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-200.000000, -60.000000)" fill="#000000"><g transform="translate(200.000000, 60.000000)"><path d="M21 36.6L21 36.6C29.6 36.6 36.6 29.6 36.6 21 36.6 12.4 29.6 5.4 21 5.4 12.4 5.4 5.4 12.4 5.4 21 5.4 29.6 12.4 36.6 21 36.6L21 36.6ZM21 42L21 42C9.4 42 0 32.6 0 21 0 9.4 9.4 0 21 0 32.6 0 42 9.4 42 21 42 32.6 32.6 42 21 42L21 42Z"/></g></g></g></svg></li>
      <li class="players player2"><svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-718.000000, -60.000000)" fill="#000000"><g transform="translate(739.500000, 81.500000) rotate(-45.000000) translate(-739.500000, -81.500000) translate(712.000000, 54.000000)"><path d="M30 30.1L30 52.5C30 53.6 29.1 54.5 28 54.5L25.5 54.5C24.4 54.5 23.5 53.6 23.5 52.5L23.5 30.1 2 30.1C0.9 30.1 0 29.2 0 28.1L0 25.6C0 24.5 0.9 23.6 2 23.6L23.5 23.6 23.5 2.1C23.5 1 24.4 0.1 25.5 0.1L28 0.1C29.1 0.1 30 1 30 2.1L30 23.6 52.4 23.6C53.5 23.6 54.4 24.5 54.4 25.6L54.4 28.1C54.4 29.2 53.5 30.1 52.4 30.1L30 30.1Z"/></g></g></g></svg></li>
    </ul>
  </header>
  <ul class="boxes" id="plateau" onclick="game()">
    <li class="box" id="one"></li>
    <li class="box" id="two"></li>
    <li class="box" id="three"></li>
    <li class="box" id="four"></li>
    <li class="box" id="five"></li>
    <li class="box" id="six"></li>
    <li class="box" id="seven"></li>
    <li class="box" id="eight"></li>
    <li class="box" id="nine"></li>
  </ul>
  `;
  bodyElt.appendChild(pageStartGameElt);
  var joueur1 = document.getElementsByClassName('players');

  joueur1[0].classList.remove('player1');
  joueur1[0].classList.add('active');
  joueur1[0].id = 'player1';
}
// fin de la fonction startGame

function game(){
  var joueur1 = document.getElementById('player1');
  if (joueur1.classList.contains('active')) {
    joueur1.classList.remove('active');
    joueur1.classList.add('player1');
    var joueur2 = document.getElementsByClassName('players');
    joueur2[1].classList.remove('player2');
    joueur2[1].classList.add('active');
    joueur2[1].id = 'player2';
  } else if (!joueur1.classList.contains('active')) {
    var joueur2 = document.getElementById('player2');
    joueur2.classList.remove('active');
    joueur2.classList.add('player1');
    var joueur1 = document.getElementsByClassName('players');
    joueur1[0].classList.remove('player1');
    joueur1[0].classList.add('active');
    joueur1[0].id = 'player1';
  }


}
