function isAPair(cards) {

  let tmp = [];
  let deck = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];

  for(let j=0;j<cards.length;j++){
    tmp.push(cards[j][0]);
  }

  for(let i=0;i<deck.length;i++){

    if(tmp.indexOf(deck[i]) != tmp.lastIndexOf(deck[i]))
      return true;

  }

  return false;

}