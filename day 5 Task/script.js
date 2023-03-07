// day 5 JS 
 

// Following are done in  anonymous function & IIFE



// A . Print odd numbers in an array

 (function (){
   let numbersOdd = [1,3,5,7,9];

for(let i of numbersOdd)
{
  console.log(i);
}
})();

// output:
1
3
5
7
9

// C Sum of all numbers in an array

(function(){
let numbers = [1,1,1,1,1];
let sumOfNumbers = 0;

for(i of numbers)
{
  sumOfNumbers = sumOfNumbers + parseInt(numbers[i])
}
console.log(sumOfNumbers);
})();

// Output:

5