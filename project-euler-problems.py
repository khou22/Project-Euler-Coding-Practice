# Solve with Python
# Problem 7
# https://projecteuler.net/problem=7

let found = false
let targetIndex = 10001
let currentNumber = 2
let numberOfPrimes = 0
while (!found) {
  for factor in range(2, currentNumber) {
    if (currentNumber % factor == 0) {
      factor = currentNumber - 1 # Terminate for loop
    }
  }
  currentNumber++
}