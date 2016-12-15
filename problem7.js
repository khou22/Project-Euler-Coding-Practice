// Project Euler Problem 7
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

var order = 10001; // 10,001st prime number

var primes = []; // Empty array of primes
var currentNumber = 2; // Number checking for prime (0, 1 are not primes)
var counter = 0; // Counter variable

while (counter < order) {
  var prime = true;
  var index = 0;
  while (prime) {
    if (index >= primes.length) {
      // If cycled through all primes, conclude is prime

      console.log("Found prime: " + currentNumber);

      primes.push(currentNumber); // Add to list
      counter++; // Found a prime, add to counter

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

console.log(primes[primes.length - 1]); // Print out last prime
