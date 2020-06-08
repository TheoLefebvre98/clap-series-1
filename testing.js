const CARDS = {
  as: "A",
  king: "K",
  queen: "Q",
  jack: "J",
  ten: "10",
  nine: "9",
  height: "8",
  seven: "7",
  six: "6",
  five: "5",
  four: "4",
  three: "3",
  two: "2"
}

function occurences(cards) {

  const result = new Object();

  for(var i in CARDS){

    for(let j=0; j<cards.length; j++){

      if(cards[j].startsWith(CARDS[i])){
        result[i] += 1;
      }

    }

  }

  return result;

}

console.log(occurences(["Ad", "7h", "8d", "As", "7s"]));