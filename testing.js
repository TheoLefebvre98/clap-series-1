const SOLAR_SYSTEM = 
  ['Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

function position(planet) {

  return SOLAR_SYSTEM.map(x => x.toUpperCase()).indexOf(planet.toUpperCase());

}

console.log(position("Earth"));