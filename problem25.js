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

// Try stint library for large integers?
/*
> var strint = require("./strint");
> strint.add("9007199254740992", "1")
  '9007199254740993'

Other operations
  lt(x, y): is x < y (“less than”)?
  le(x, y): is x ≤ y (“less or equal”)?
  gt(x, y): is x > y (“greater than”)?
  ge(x, y): is x ≥ y (“greater or equal”)?
  eq(x, y): is x = y (“equals”)?
  add(x, y)
  sub(x, y)
  mul(x, y)
  div(x, y)
  abs(x)
  isNegative(x)
  isPositive(x)
  negate(x)
*/

var found = false;

var index = 1;
var previous = 0;
var current = 1;

var numDigits = 3;

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
