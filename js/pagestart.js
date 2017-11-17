(function() {
  var pageDeJeu = document.getElementById('board');
  pageDeJeu.style.display = "none";
  var pageStartElt = document.createElement('div');
  pageStartElt.id = "start";
  pageStartElt.setAttribute('class', 'screen screen-start');
  pageStartElt.innerHTML = `
  <header>
    <h1>
      Tic Tac Toe
    </h1>
    <a href="#" class="button">
      Start game
    </a>
  </header>
  `;
  console.log(pageStartElt);
  var bodyElt = document.querySelector('body');
  bodyElt.appendChild(pageStartElt);
}());
