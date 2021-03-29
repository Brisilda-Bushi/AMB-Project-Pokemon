// Define game state, this state is mapped to div id
const gamestate = {
  INTRO: "intro",
  CHOOSE: "choose",
  BATTLE: "battle",
  GAMEOVER: "gameover"
};

var currentGamestate;

// Initialize the game, set gamestate to intro
function onInit() {
  currentGamestate = gamestate.INTRO;
  setView(currentGamestate);
}

// Start the game and set gamestate to choose
function onStart() {
  currentGamestate = gamestate.CHOOSE;
  setView(currentGamestate);
}

// Start the battle
function onStartBattle() {
  currentGamestate = gamestate.BATTLE;
  setView(currentGamestate);
}

// After gameover, this function can be called to restart the game
// basically reset the gamestate into intro
function onPlayAgain() {
  currentGamestate = gamestate.INTRO;
  setView(currentGamestate);
}

// function to set the view based on gamestate
function setView(currentGamestate) {
  for (var state in gamestate) {
    if (gamestate[state] === currentGamestate) {
      document.getElementById(gamestate[state]).style.display = "block";
    } else {
      document.getElementById(gamestate[state]).style.display = "none";
    }
    console.log("Set view: " + currentGamestate);
  }
}