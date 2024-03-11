// Assignment 18
// Part 1
let favPlaces: string[] = ["istanbul", "tokyo", "london", "rome", "paris"]

// part 2 // printing array in original order
console.log("Original order: " + favPlaces)

// part 3 // printing array in alphabetical order without modifying actual list
let newarray = favPlaces.slice().sort()
console.log("Alphabetical order: " + newarray) 

// part 4 
console.log("Original order after sorting: " + favPlaces)

// part 5 // print array in reverse alphabetical order
let anotherArray = newarray.reverse();
console.log("Reverse Alphabetical order: " + anotherArray)

// part 6 // printing the original array
console.log("Original order after reversing alphabetical order: " + favPlaces)

// part 7 // Reversing the order of array
favPlaces.reverse();
console.log("reversing the original array: " + favPlaces)

// part 8 // getting back to original order
favPlaces.reverse()
console.log("getting back to original order: " + favPlaces)

// part 9 // sorting array
favPlaces.sort();
console.log("sorting in alphabetical order: " + favPlaces)

// part 10 // reversing alphabetical order
favPlaces.reverse();
console.log("reverse alphabetical order: " + favPlaces)

