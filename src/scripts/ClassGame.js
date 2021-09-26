
import { Player } from "./ClassPlayer.js";
import { QuestionAndAnswers } from "./ClassQuestionAndAnswers.js";
import { Category } from "./ClassCategory.js";

const d=document;
// newPlayer = new Player()

export class Game{

  // setPlayerName(){
  //   const 
  //   $nameNewPlayer = document.getElementById("name-input").value,
  //   $scoreContainer= document.querySelector(".score-container"),
  //   $playerContainer = d.querySelector(".player-container");
  //   newPlayer.setPlayerName($nameNewPlayer)
  //   $playerContainer.innerHTML=`Player:<br> <strong> ${newPlayer.getPlayerName()}</strong>`;
  //   $scoreContainer.innerHTML=`Score:<br> <strong> ${newPlayer.getScore()}</strong>`;
  // }

  setCategoryName(){
    const category= new Category();
    category.getCategory()
  }

  
  numRandom(){ return Math.floor((Math.random()*4))}

  //GAME STARTING CODE
  startGame(){
    const 
      $welcome=d.getElementById("welcome-id"),
      $main = d.getElementById("main-section").removeAttribute("hidden",false);
      $welcome.setAttribute("hidden",true);
    
      //this.setPlayerName();

    const questionsAndAnswers = new QuestionAndAnswers()
    questionsAndAnswers.getQuestion(0,this.numRandom());
    questionsAndAnswers.setPlayerName();
    questionsAndAnswers.setScore();
    this.getCategory;


    

  };

}