/*
  Problem 25

  The Fibonacci sequence is defined by the recurrence relation:

  Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
  Hence the first 12 terms will be:

  F1 = 1
  F2 = 1
  F3 = 2
  F4 = 3
  F5 = 5
  F6 = 8
  F7 = 13
  F8 = 21
  F9 = 34
  F10 = 55
  F11 = 89
  F12 = 144
  The 12th term, F12, is the first term to contain three digits.

  What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
*/

var found = false;

var index = 1;
var previous = 0;
var current = 1;

var numDigits = 1000;

while (!found) {
  console.log("F" + index + " = " + current);

  current += previous; // Current number

  previous = current; // Advance previous
  index++;

  if (current.toString().length >= numDigits) {
    found = true;
    console.log("Index:", index);
    console.log("Value:", current);
  }
}
