//: Playground - noun: a place where people can play
/*
 Solve Project Euler problems using Swift
 Project Euler: https://projecteuler.net/archives
*/

import UIKit

/*
 Problem 6
 https://projecteuler.net/problem=6
 
 The sum of the squares of the first ten natural numbers is,
 
 1^2 + 2^2 + ... + 10^2 = 385
 The square of the sum of the first ten natural numbers is,
 
 (1 + 2 + ... + 10)^2 = 552 = 3025
 Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
 
 Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

var max: Int = 100
var sumOfSquares: Int = 0
var sum: Int = 0

for currentNum in 0...max {
    var currentExponent = pow(Double(currentNum), Double(2))
    sumOfSquares += Int(currentExponent)
    
    sum += currentNum
}

var squareOfSum: Int = Int(pow(Double(sum), Double(2)))

print("Sum of squares:", sumOfSquares)
print("Square of sums:", squareOfSum)

var difference: Int = squareOfSum - sumOfSquares

print("Difference between the sum of the squares of the first one hundred natural numbers and the square of the sum: \(difference)")