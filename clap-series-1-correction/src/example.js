/*
 * /!\ Ceci est un exemple de code qui fait passer les tests présents dans exampleSpec.js au vert !

 * Pour chaque nombre en entrée
 * Si le nombre est divisible par 3 => Fizz
 * Si le nombre est divisible par 5 =>  Buzz
 * Si le nombre est divisible par 3 et par 5 => FizzBuzz
 * Sinon retourner le nombre
 *
 * Voir le fichier de tests associé (spec/exampleSpec.js)
 */
function fizzBuzz(number) {
  if(number % 5 === 0 && number % 3 === 0) {
    return 'FizzBuzz';
  } else if (number % 3 === 0) {
    return 'Fizz';
  } else if (number % 5 === 0) {
    return 'Buzz';
  } else {
    return `${number}`;  
  }
}

export { fizzBuzz };