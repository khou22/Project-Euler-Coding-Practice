/* Problem 17

If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


Note: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

*/

var onesStrings = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
var tensStrings = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

var letterCount = 11; // Take into account "one-thousand"
for (var i = 1; i < 1000; i++) {
  var numberLength = 0;

  // Calculate digits
  var hundreds = Math.floor(i / 100);
  var remainder = i % 100;
  var tens = Math.floor(remainder / 10);
  remainder = remainder % 10;
  var ones = remainder;

  // If hundreds
  if (hundreds != 0) {
    numberLength += onesStrings[hundreds].length;
    if (tens != 0 || ones != 0) {
      numberLength += 3; // Add three because of "and"
    }
    numberLength += 7; // Add seven because of "hundred"
  }

  if (tens != 1) {
    numberLength += tensStrings[tens].length;
    numberLength += onesStrings[ones].length;
  } else {
    // If in the teens
    numberLength += teens[ones].length;
  }

  // console.log("Hundreds:", hundreds);
  // console.log("Tens:", tens);
  // console.log("Ones:", ones);
  //
  // console.log(i + " has " + numberLength + " letters");
  // console.log();
  letterCount += numberLength;
}

console.log(letterCount + " total letters");
