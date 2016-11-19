/*
  Project Euler Problem 7
  The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

  Find the sum of all the primes below two million.
*/

var order = 2000000; // Primes below 2,000,000

var primes = []; // Empty array of primes
var sum = 0;
var currentNumber = 2; // Number checking for prime (0, 1 are not primes)
var counter = 0;

while (currentNumber < order) {
  var prime = true;
  var index = 0;
  while (prime) {
    if (index >= primes.length) {
      // If cycled through all primes, conclude is prime

      console.log("Found prime: " + currentNumber);

      primes.push(currentNumber); // Add to list
      sum += currentNumber; // Add to master list of primes

      prime = false; // Terminate while loop
    }
    if (currentNumber % primes[index] == 0) {
      // If divisible by a prime
      prime = false;
    }
    index++; // Advance
  }
  currentNumber++; // Next number
}

console.log(sum); // Print out last prime
