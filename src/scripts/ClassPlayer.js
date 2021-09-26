
export  class Player{
  constructor(){
      this._name;
      this._score=0;
    };


  setScore(score){
    this._score+=score;
  }
  getScore(){
    return this._score;
  }

  setPlayerName(name){
    this._name=name;
  }
  getPlayerName(){
    return this._name;
  }

}