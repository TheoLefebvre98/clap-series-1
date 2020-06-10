/*
 * /!\ À faire seul !
 *
 * Retourne un boolean qui indique si le tableau cards contient une pair, exemple : 
 * cards = ["As", "10d", "Jd", "Qs", "Ah", "2h", "3c"] isPaired(cards) retournera true
 * cards = ["As", "10d", "Jd", "Qs", "2h", "3c", "5d"] isPaired(cards) retournera false
 * 
 * Attention, une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte : 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte : s => ♠, h => ♥, c => ♣, d => ♦
 */


import { getCardsValue, nbOccurences } from "../src/utils";

function isAPair(cards) {

  // let tmp = [];
  // let deck = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];

  // for(let j=0;j<cards.length;j++){
  //   tmp.push(cards[j][0]);
  // }

  // for(let i=0;i<deck.length;i++){

  //   if(tmp.indexOf(deck[i]) != tmp.lastIndexOf(deck[i]))
  //     return true;

  // }

  // return false;

  let cardsValue = getCardsValue(cards)
	let res = false
	VALUES.forEach(value => {
		if (nbOccurences(cardsValue, value) > 1) {
			res = true
			return
		}
	})
	return res

}

export { isAPair };