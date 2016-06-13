//: Playground - noun: a place where people can play
/*
 Solve Project Euler problems using Swift
 Project Euler: https://projecteuler.net/archives
*/

import UIKit

/*
 Problem 5
 https://projecteuler.net/problem=5
 
 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 
 What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

var min: Int = 1
var max: Int = 20
var found: Bool = false
var value: Int = max
var index: Int = 1

while found == false {
    value = max * 17 * 7 * 13 * 3 * 11 * index
    print(value)
    var valid: Bool = true
    var divisor: Int = min
    while valid == true {
        if value % divisor == 0 {
            if (divisor == max) {
                print(value, "is the lowest number divisible by all numbers from", min, "to", max)
                found = true
                valid = false
            }
            divisor += 1
        } else {
            valid = false
        }
    }
    index += 1
}