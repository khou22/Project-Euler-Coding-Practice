//: Playground - noun: a place where people can play
/*
 Solve Project Euler problems using Swift
 Project Euler: https://projecteuler.net/archives
*/

import UIKit

/*
 Problem 4
 https://projecteuler.net/problem=4
 
 A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 
 Find the largest palindrome made from the product of two 3-digit numbers.
*/

func checkPalindrome(input: Int) -> Bool {
    if Array(String(input).characters).reverse() == Array(String(input).characters) {
        return true
    } else {
        return false
    }
}

var min = 100
var max = 999
var palindromes: [Int] = []

for firstNum in min...max {
    print(firstNum)
    for secondNum in min...max {
        if checkPalindrome(firstNum * secondNum) {
            palindromes.append(firstNum * secondNum)
        }
    }
}

var maxPalindrome: Int = 0
for value in palindromes {
    if value > maxPalindrome {
        maxPalindrome = value
    }
}
print("Largest palindrome produced by the product of two 3-digit numbers is: \(maxPalindrome)")