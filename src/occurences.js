/*
 * /!\ À essayer seul, me mp si trop compliqué !
 *
 * Le but de cette fonction est de déterminer le nombre de cartes ayant la même valeur dans un tableau :
 * cards = ["Ad", "7h", "8d", "As", "Qs"] alors occurences(cards) 
 * retournera { as: 2, seven: 1, height: 1, queen: 1 }
 * 
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 *
 */

import { getCardsValue, nbOccurences } from "../src/utils";

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
//   let occ = {}

//   cards
//     .map(c => c.split('').slice(0, c.length - 1).join())
//     .forEach(val => {
//       Object.entries(CARDS).forEach(card => {
//         let k = card[0]
//         let v = card[1]

//         if(v == val) {
//           if(occ[k]) {
//             occ[k] += 1
//           } else {
//             occ[k] = 1
//           }
//         }
//       });
//     });

//     return occ

// Correction

    let cardsValue = getCardsValue(cards)

    let count = new Object()
    let nbOcc = 0

    for (let [key, value] of Object.entries(CARDS)) {
      nbOcc = nbOccurences(cardsValue, value)
      if (nbOcc > 0) count[key] = nbOcc
    }
    return count

}

export { occurences };