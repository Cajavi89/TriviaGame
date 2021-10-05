
import { Player } from "./ClassPlayer.js";
import { QuestionAndAnswers } from "./ClassQuestionAndAnswers.js";


const d=document;


export class Game{

  
  
  numRandom(){ return Math.floor((Math.random()*4))}

  //GAME STARTING CODE
  startGame(){
    const 
      $welcome=d.getElementById("welcome-id"),
      $main = d.getElementById("main-section").removeAttribute("hidden",false);
      $welcome.setAttribute("hidden",true);
    


    const questionsAndAnswers = new QuestionAndAnswers()
    questionsAndAnswers.getQuestion(0,this.numRandom());
    questionsAndAnswers.setPlayerName();
    questionsAndAnswers.setScore();
    this.getCategory;


    

  };

}