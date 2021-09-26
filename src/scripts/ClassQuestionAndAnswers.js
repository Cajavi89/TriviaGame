import { Game } from "./ClassGame.js";
import { Player } from "./ClassPlayer.js";

const d=document,
newPlayer= new Player();

export class QuestionAndAnswers{

  async getDataBase(){
    let res = await fetch('/SofkaQuiz/src/scripts/questions.json'),
    json = await res.json();
    if(!res.ok)throw{status: res.status, statusText: res.statusText};
    return json
  };
  
  
  async getQuestion(number1,number2){
      const json = await this.getDataBase()
      
      if(number1<json.length){
        d.querySelector(".questions-item").innerHTML=json[number1].round[number2].question
        const correctAnswer= json[number1].correctAnswers[number2]
      console.log(correctAnswer)
        this.getAnswers(number1,number2);
        this.getCategory(json,number1,number2)
        this.getDificulty(json,number1,number2)
        this.getCorrectAnswer(number1+1,number2,correctAnswer)
        newPlayer.setScore(0)

      }else{
        this.winScreen();
        
      }
      
    
  };

  async getAnswers (number1,number2){
    const json = await this.getDataBase();
    //console.log(json[0].round[0].answers)
    let answers = json[number1].round[number2].answers
    console.log(answers)
    const $button = d.querySelectorAll("input[data-btn-response]");
    for(let i=0;i<$button.length;i++){
        $button[i].value = answers[i]
    }
  }

  async getCorrectAnswer(number1,number2,correctAnswer){
    const $button = d.querySelectorAll("input[data-btn-response"),
      random= new Game();
    $button.forEach(btn=>{
      btn.addEventListener("click",e=>{
        e.preventDefault();
        if(btn.value===correctAnswer){
          this.getQuestion(number1,random.numRandom())
          this.setScore(5)
        }
      })
    })
  }
 
  setPlayerName(){
    const
    $nameNewPlayer = document.getElementById("name-input").value,
    $playerContainer = d.querySelector(".player-container");
    newPlayer.setPlayerName($nameNewPlayer)
    $playerContainer.innerHTML=`Player:<br> <strong> ${newPlayer.getPlayerName()}</strong>`;
    
  }

  setScore(score){
    const 
    $scoreContainer= document.querySelector(".score-container")
    newPlayer.setScore(5);
    $scoreContainer.innerHTML=`Score:<br> <strong> ${newPlayer.getScore()}</strong>`;
  }

  //Get Current Category
  getCategory(list,number1,number2){
    const $category = d.querySelector(".category-container");
    $category.innerHTML =`Category:<br><strong> ${list[number1].round[number2].category}</strong>`;
  };

  getDificulty(list,number1,number2){
    const $dificult = d.querySelector(".dificult-container");
    $dificult.innerHTML =`dificult:<br><strong>${list[number1].round[number2].dificult}</strong>`;
  };
  
  
  lostScreen(){
    const player = document.getElementById("name-input").value;
    document.querySelector(".info-container").innerHTML=`Lo sentimos<em>${player}</em>Perdiste el cuestionario.`
    document.querySelector(".questions-container").innerHTML="Lo sentimos, perdiste"
  }
  
  winScreen(){
    const player = document.getElementById("name-input").value;
    document.querySelector(".info-container").innerHTML=`Felicidades!!<em>${newPlayer.getPlayerName()}</em>Te llevas el ACUMULADO de ${newPlayer.getScore()}!`
    document.querySelector(".questions-container").innerHTML=`<div class="info-container">MUY BIEN GANASTE</div><br>
    Historial:<br>
    ${this.allLocalStorage()}`

    localStorage.setItem(newPlayer.getPlayerName(),newPlayer.getScore());
  }
  allLocalStorage(){
    
    let i,
     localstorage =[]

    console.log("local storage");
    for (i = 0; i < localStorage.length; i++)   {
        return localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]";
    }
    
    console.log("session storage");
    for (i = 0; i < sessionStorage.length; i++) {
        return sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]";
    }
  
  }
  
};


