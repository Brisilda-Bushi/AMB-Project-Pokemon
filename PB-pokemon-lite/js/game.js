class Battle {
  constructor() {
    this.turn = 0;
    this.currentPlayerTurn;
    this.players = [];
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

// Game variable
var currentGamestate;
var player1;
var player2;
var currentPlayerToChoosePokemon;

// Game-flow functions
// Initialize the game, set gamestate to intro
function onInit() {
  initGame();
  setActiveView(currentGamestate);
}

// Start the game and set gamestate to choose
function onStart() {
  initChoose();
  currentGamestate = gamestate.CHOOSE;
  setActiveView(currentGamestate);
}

// Start the battle
function onStartBattle() {
  currentGamestate = gamestate.BATTLE;
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
  for (var state in gamestate) {
    if (gamestate[state] === currentGamestate) {
      document.getElementById(gamestate[state]).style.display = "block";
    } else {
      document.getElementById(gamestate[state]).style.display = "none";
    }
    console.log("Set active view: " + currentGamestate);
  }
}

// Initialize game state
function initGame() {
  currentGamestate = gamestate.INTRO;
  player1 = new Player(1);
  player2 = new Player(2);
  currentPlayerToChoosePokemon = {};
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