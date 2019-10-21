//Q1:

//Write the function printInt(n) taking one parameter n and print all //natural numbers from 1 to n in console.

function printInt(n) {
  for (var i = 1; i <= n; i++) {
    console.log(i);
  }
}

printInt(10);

//Q2:

//Write the function printIntRev(n) taking one parameter n and  print all natural numbers in reverse in console (from n to 1).

function printIntRev(n) {
  for (var i = n; i >= 1; i--) {
    console.log(i);
  }
}

printIntRev(10);

//Q3:
//Write the function checkInput(x) taking one parameter x and return the string ‘number’ if x is a number; return the string ‘string’ if x is a string; and return ‘boolean’ if x is a boolean. Otherwise returns -1.

function checkInput(x) {
  if (typeof x === "string") {
    return "string";
  } else if (typeof x === "number") {
    return "number";
  } else if (typeof x === "boolean") {
    return "boolean";
  } else {
    return -1;
  }
}
console.log(checkInput("1, 2"));

//Q4:
//Write the function simpleEvenAdding(num) taking a number and add up all the even numbers from 1 to num, and return it

function simpleEvenAdding(num) {
  var counter = 0;
  for (var i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      counter += i;
    }
  }
  return counter;
}
console.log(simpleEvenAdding(10));

//Q5:
//Write the function letterCapitalize(str) taking a string and capitalize the first letter of each word. The given words will be separated by only one space.

function letterCapitalize(str) {
  str = str.split(" ");

  for (var i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
  return str.join(" ");
}

console.log(letterCapitalize("bla bla bla bla bla"));

//Q6:
//Write the function simpleReverse(str) taking a string and return the string in reversed order.

function simpleReverse(str) {
  var reversed = "";
  //var solution="";
  //var length=str.length;
  //for(var i=1; i<=length; i++){
    //solution+=str[length-1];
    //return solution;
  }
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }
  return reversed;
}
console.log(simpleReverse("bla bla bla bla bla"));

//Q7:
//Write the function findDiff(arr) taking an array of numbers as parameter and return the difference between the maximum number and the minimum number (max - min).

function findDiff(arr) {

  var max = Math.max.apply(Math, arr);
  var min = Math.min.apply(Math, arr);
  var result = max - min;

  return result;
}

console.log(findDiff([1, 2, 4, 6, 20, 3]));


var min=arr[0];
var max=arr[0];


//Q8:
//Write the function timeConvert(num) taking a number as parameter and return the number of hours and minutes the parameter converts to. Separate the number of hours and minutes with a colon.

function timeConvert(num) {
  var n = num;
  var hours = n / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rhours + ":" + rminutes;
}

console.log(timeConvert(59));

//Q9:
//Write the function findStr(str, long) taking two strings as parameters and return how many str you can find in long. Assume Str is not empty string.

function findStr(str, long) {
  var counter = 0;
  var strLength = str.length;

  for (var i = 0; i <= long.length - strLength; i++) {
    if (str === long.substring(i, i + strLength)) {
      counter++;
    }
  }
  return counter;
}

console.log(findStr("a", "hahahah"));

//Q10:
//Write the function selfDividingNumbers(left, right) taking two number bound as parameters and returns an array of every possible self dividing number between
//them, including the bounds.

function selfDividingNumbers(left, right) {
  var counter = [],
    result;

  for (left; left <= right; left++) {
    for (var i = 0; i < left.toString().length; i++) {
      if (
        left % left.toString().charAt(i) === 0 &&
        left.toString().charAt(i) !== 0
      ) {
        result = true;
      } else {
        result = false;
        break;
      }
    }
    if (result == true) counter.push(left);
  }

  return counter;
}
console.log(selfDividingNumbers(1, 22));

//Q11;
//Write the function moveZeros(nums) taking an array of numbers and move all 0’s to the end of it while maintaining the relative order of the non-zero elements.

function moveZeros(nums) {
  // store our final array
  var solution = [];
  // count 0s
  var counter = 0;
  // create an array without 0s
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      counter++;
    } else {
      // push that into solution
      solution.push(nums[i]);
    }
  }
  //adding 0s
  while (counter > 0) {
    solution.push(0);
    counter--;
  }

  return solution;
}

console.log(moveZeros([1, 0, 0])); //   // store our final array

//Q12:
//Create an average(nums) function that calculates the average of an array of numbers

function average(nums) {
  var sum = 0;

  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  var avg = sum / nums.length;
  return avg;
}
console.log();
