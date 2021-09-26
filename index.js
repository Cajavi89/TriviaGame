import { Game } from "./src/scripts/ClassGame.js";

document
.getElementById("welcome-form")
.addEventListener("submit", e=>{
  e.preventDefault()
  const game= new Game();
  game.startGame();
})
