const cleanCities: string[] = ['Paris', 'Tokyo', 'Singapore', 'Zurich'];

 

const city1 = 'Paris';
const city2 = 'New York';

if (cleanCities.includes(city1)) {
  console.log(`${city1} is a clean city.`);
} else {
  console.log(`Sorry, ${city1} is not a clean city.`);
}

if (cleanCities.includes(city2)) {
  console.log(`${city2} is a clean city.`);
} else {
  console.log(`Sorry, ${city2} is not a clean city.`);
}
