/* INCOMPLETE
  Problem 9
  A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

  a2 + b2 = c2
  For example, 32 + 42 = 9 + 16 = 25 = 52.

  There exists exactly one Pythagorean triplet for which a + b + c = 1000.
  Find the product abc.
*/

var sum = 1000;
var highestPossible = Math.floor(Math.sqrt(sum)); // Highest possible component

var components = [1, 1, 1]; // [a, b, c]
var completed = [false, false, false];

var pythagoreanTriplet = function(a, b, c) {
  var a2 = Math.pow(a, 2);
  var b2 = Math.pow(b, 2);
  var c2 = Math.pow(c, 2);

  return a2 + b2 + c2; // Return sum
}


var found = false;
var stage = 0;

while (!found) {
  var result = pythagoreanTriplet(components[0], components[1], components[2]);
  if (result == sum) {
    // If found
    i = components.length;
  } else {
    if (result > sum) {
      // If bigger than sum

    }
  }
}

var increment = function() {
  if (stage == 1) {
    components[0]++;
  } else if (stage == 2) {

  }
}
