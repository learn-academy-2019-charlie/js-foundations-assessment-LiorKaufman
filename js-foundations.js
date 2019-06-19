// // Javascript Foundations Assessments
//
// // 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".

function divByThree (num) {
  if (typeof num !== "number") {
    return "please enter a number"
  } else if (num%3 ===0) {
    return `${num} is divisible by three`
  } else {
    return `${num} is not divisible by 3`
  }
}

console.log(divByThree(15));

//
// // 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.
let helloMe = {
  first_name: "Lior",
  last_name: "Kaufman",
  age:28,
  hair: "Brown",
  getInfo: function(){
    return `My name is ${this.first_name} ${this.last_name} I am ${this.age} old and my hair color is ${this.hair}`
  }
}

console.log(helloMe.getInfo());

//
// // 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.
//

let grocery = ["apples","oranges","dishsoap","maple syrup","dog food"]
function getIndexes (arr) {
  var length = arr.length
  var mid = length/2

  if (length % 2 === 0) {
    mid = mid
  } else {
    mid = Math.floor(mid)
  }
  return `First Item: ${arr[0]}  Second Item:${arr[mid]} Third Item: ${arr[length-1]}`
}

console.log(getIndexes(grocery));
// // 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.
function arrangeLetters (str){
    let newArr = str.toLowerCase().split("")
    return newArr.sort((a,b) => {
      return a>b? 1:-1
    }).join("")
  }

console.log(arrangeLetters("learn"));
//
// // 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.
//
 var nums = [9, 5, 88, 2, 5, 42, 57]
//
var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]
//
// // output should be: "9 ducks", etc
//
function addArrays (arr1,arr2){
  let newArr =[]
  for (var j = 0; j <arr2 .length; j++) {
    newArr[j] = `${arr1[j]} ${arr2[j]}`
  }
  return newArr
}

console.log(addArrays(nums,nouns));

// //6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.
//
var numArray = [1,2,3,4,5]
function multFive (arr){
  return arr.map(x => x*5)
}

console.log(multFive(numArray));
