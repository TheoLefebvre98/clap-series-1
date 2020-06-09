let test = ["Ad", "7h", "8d", "As", "Qs"];

function orderCards(cards) {
  
  return cards.sort(compare);

}

function compare(card1, card2){

  if(getValue(card1) > getValue(card2))
    return -1
  else if(getValue(card1) < getValue(card2))
    return 1
  else{
    if(getType(card1) > getType(card2))
      return -1;
    else
      return 1;
  }

}

function getValue(card){

  let value = card.slice(0, 1);

  switch(value){
    case '1' :
      return 10;
    case 'J' :
      return 11;
    case 'Q' :
      return 12;
    case 'K' :
      return 13;
    case 'A' :
      return 14;
    default : 
    return Number(value);
  }
  
}

function getType(card){

  let type = card.slice(card.length - 1);

  switch(type){
    case 'd' :
      return 1;
    case 'c' :
      return 2;
    case 'h' :
      return 3;
    case 's' :
      return 4;
  }

}

console.log(orderCards(test));