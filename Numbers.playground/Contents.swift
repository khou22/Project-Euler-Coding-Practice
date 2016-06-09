//: Playground - noun: a place where people can play
/*
 Solve Project Euler problems using Swift
 Project Euler: https://projecteuler.net/archives
*/

import UIKit

/*
 Problem 3
 https://projecteuler.net/problem=3
 
 The prime factors of 13195 are 5, 7, 13 and 29.
 
 What is the largest prime factor of the number 600851475143 ?
*/

let number = 600851475143
//let number = 13195
//let number = 100
var checking:Bool = true
var factors:[Int]=[], primeNumbers:[Int] = [], primeFactors:[Int] = []

// Get factors
var reducedNumber:Int = number
var currentNumber:Int = 1
while checking {
    if (reducedNumber % currentNumber) == 0 {
        factors.append(currentNumber)
        reducedNumber = reducedNumber/currentNumber
        print(reducedNumber)
    }
    if (currentNumber > reducedNumber) {
        checking = false
    }
    currentNumber += 1
}

// Check to see if prime
for (index, factor) in factors.enumerate() {
    var currentIndex = 2
    var checking:Bool = true
    while checking {
        if (factor % currentIndex) == 0 {
            // Not a prime number
            print(factor, "is not prime")
            checking = false
        }
        currentIndex += 1
        if (currentIndex > (factor/2)) {
            // Is a prime number
            print(factor, "is a prime number")
            primeFactors.append(factor)
            checking = false
        }
    }
}

print(primeFactors)
print("Largest prime factor of", number, "is", primeFactors[primeFactors.count - 1])