// Kata: //www.codewars.com/kata/525c65e51bf619685c000059

https: function cakes(recipe, available) {
  // create an array numbers
  // iterate over recipe
  // for every key check the value of the same key
  // in 'available' and divide the value from 'available' by the value of 'recipe'
  // this number gets added to 'numbers'

  // after the iteration we choose the lowest number of 'numbers' array and return it

  const numbers = [];

  for (let ingredient in recipe) {
    if (!available[ingredient]) return 0;
    numbers.push(Math.floor(available[ingredient] / recipe[ingredient]));
  }
  return Math.min(...numbers);
}
