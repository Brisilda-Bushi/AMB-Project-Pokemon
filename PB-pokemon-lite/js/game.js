class Battle {
  constructor() {
    this.turn = 1;
    this.currentPlayer;
    this.targetPlayer;
  }
}

class Player {
  constructor(no) {
    this.no = no;
    this.pokemon;
    this.pokemonImage;
  }
}

// Define game state, this state is mapped to div id
const gamestate = {
  INTRO: "intro",
  CHOOSE: "choose",
  BATTLE: "battle",
  GAMEOVER: "gameover"
};

// API pokemon image
const pokemonApi = "https://pokeapi.co/api/v2/pokemon/";

// Intro animation
let introAnimationGif = new Image();
introAnimationGif.src = "/img/intro-no-loop-compressed.gif";

// Game variable
let currentGamestate;
let player1;
let player2;
let battle;

// Game-flow functions
// Initialize the game, set gamestate to intro
function onInit() {
  initGame();
  setActiveView(currentGamestate);
}

// Start the game and set gamestate to choose
function onStartGame() {
  initChoose();
  setActiveView(currentGamestate);
}

// Start the battle
function onStartBattle() {
  initBattle();
  updateBattle();
  setActiveView(currentGamestate);
}

// After gameover, this function can be called to restart the game
// reset the gamestate to intro and reset other variables
function onPlayAgain() {
  initGame();
  setActiveView(currentGamestate);
}

// function to set the view based on gamestate
function setActiveView(currentGamestate) {
  for (let state in gamestate) {
    if (gamestate[state] === currentGamestate) {
      document.getElementById(gamestate[state]).style.display = "block";
    } else {
      document.getElementById(gamestate[state]).style.display = "none";
    }
    console.log("Set active view: " + currentGamestate);

    // add random number, so that the image will always be reloaded
    document.getElementById("intro").style.backgroundImage = `url(${introAnimationGif.src+"?"+Math.random()})`;
  }
}

// Initialize game state
function initGame() {
  currentGamestate = gamestate.INTRO;
  player1 = new Player(1);
  player2 = new Player(2);
  document.getElementById("choose-player-name").innerHTML = "Player 1";
}

// Initializing choose screen
function initChoose() {
  currentPlayerToChoosePokemon = player1;

  document.getElementById("choose-pokemon-list").innerHTML = "";
  let pokemonHtmlButton = "";
  pokemons.forEach(pokemon => {
    pokemonHtmlButton += `<button type="button" class="nes-btn" style="padding:0;" data-pokemon="${pokemon.pokemonName}" onclick="choosed(this)"><img
  src="/img/pokemon/${pokemon.pokemonName}.png"></button>`;
  })
  document.getElementById("choose-pokemon-list").innerHTML = pokemonHtmlButton;

  currentGamestate = gamestate.CHOOSE;
}

// Initializing battle screen
function initBattle() {
  battle = new Battle();
  battle.currentPlayer = player1;
  battle.targetPlayer = player2;
  currentGamestate = gamestate.BATTLE;
}

// Function for choosing pokemon for p1 & p2
function choosed(event) {
  if (currentPlayerToChoosePokemon === player1) {
    player1.pokemon = clonePokemon(pokemons.find(x => x.pokemonName === event.dataset.pokemon));
    currentPlayerToChoosePokemon = player2;
    document.getElementById("choose-player-name").innerHTML = "Player " + player2.no;
  } else if (currentPlayerToChoosePokemon === player2) {
    player2.pokemon = clonePokemon(pokemons.find(x => x.pokemonName === event.dataset.pokemon));
    onStartBattle();
  }
}

// We need to clone pokemon before sending it to battle
// In case it died, we still have the original ^^ wink wink
function clonePokemon(pokemon) {
  return JSON.parse(JSON.stringify(pokemon));
}

function updateBattle() {
  document.getElementById("current-player-pokemon").src = `/img/pokemon/back/${battle.currentPlayer.pokemon.pokemonName}.png`;

  document.getElementById("target-player-pokemon").src = `/img/pokemon/${battle.targetPlayer.pokemon.pokemonName}.png`;
}