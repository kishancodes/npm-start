/*
  -- TO GET STARTED --
  Navigate to this folder in your command line
  Run the command 'npm i' to download your dependencies (Jest)
  Run the command 'npm run test' to run your tests
  Note that all of the tests are failing

  Finish the below functions to get the tests to pass
  See the Jest video for more information on automated tests
*/


const characters = [
  {
    name: 'Rey',
    faction: 'Jedi'
  },
  {
    name: 'Luke Skywalker',
    faction: 'Jedi'
  },
  {
    name: 'Kylo Ren',
    faction: 'First Order'
  },
  {
    name: 'FN2187 (Finn)',
    faction: 'Resistance'
  },
  {
    name: 'Poe Dameron',
    faction: 'Resistance'
  }
]

//I am using console logs for debugging.

const getFaction = (characters) => {
  return characters.faction === 'Jedi'
} 

const getName = (characters) => {
  return characters.name
}

const freebie = () => {
  // Return the length of the array
  const fruit = [ 'apple', 'orange', 'banana', 'strawberry' ]
  console.log(fruit.length)
  return fruit.length
}


const mapExercise1 = () => {
  /*
    Using the Array.map function, create an array
    of just these characters' names.
  */

  const names = characters.map(getName)
  console.log(names)
  return names
  // [ 'Rey', 'Kylo Ren', 'FN2187', 'Poe Dameron' ]
}


const mapExercise2 = () => {
  /*
    Using the Array.map function, create a new array
    where each number in numbers is multiplied by 2
  */

  const numbers = [ 8, 7, 1, 5 ]

  const doubleNumbers = numbers.map(x => x * 2)
  console.log(doubleNumbers)
  return doubleNumbers
  // [ 16, 14, 2, 10 ]
}


const filterExercise1 = () => {
  /*
    Using the Array.filter function, create a new array
    with only the even numbers from 'numbers'
    HINT: The modulus (%) operator works the same
      in Javascript as it does in Java
  */

  const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8 ]

  const evenNumbers = numbers.filter(function(x) {
    if (x % 2 === 0) {
      return x;
    }
  })
  console.log(evenNumbers)
  return evenNumbers
  // [ 2, 4, 6, 8 ]
}


const chainExercise1 = () => {
  /*
    Create a new array of just the Jedi names
    from the characters array
  */

  const jedi = characters.filter(getFaction).map(getName)
  console.log(jedi)
  return jedi
  //[ 'Rey', 'Luke Skywalker' ]
}



module.exports = {
  freebie,
  mapExercise1,
  mapExercise2,
  filterExercise1,
  chainExercise1,
}