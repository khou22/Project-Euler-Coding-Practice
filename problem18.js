/*
Maximum Path Sum
Find the maximum total from top to bottom of the triangle below

Method: Uses a slightly modified version of maxflow
*/

var triangle = [
  [75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20, 04, 82, 47, 65],
  [19, 01, 23, 75, 03, 34],
  [88, 02, 77, 73, 07, 63, 67],
  [99, 65, 04, 28, 06, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23],
]

var maxFlow = triangle.slice(); // Copy triangle

for (var row = 1; row < maxFlow.length; row++) { // Move from top to bottom
  // Start with second row

  var currentRow = maxFlow[row]; // Store row
  var rowAbove = maxFlow[row - 1]; // Get row above

  // console.log("Current row:", currentRow);
  // console.log("Row above:", rowAbove);

  for (var col = 0; col < currentRow.length; col++) { // Move from left to right
    var current = currentRow[col];

    // Store the items above
    var topLeft = 0;
    var topRight = 0;

    if (col != 0) { // Not left side
      topLeft = rowAbove[col - 1];
    }

    if (col != currentRow.length - 1) { // Not right side
      topRight = rowAbove[col];
    }

    // console.log(current, topLeft, topRight);

    var sumLeft = current + topLeft;
    var sumRight = current + topRight;

    maxFlow[row][col] = Math.max(sumLeft, sumRight); // Store the max flow to that point
  }
}

var champion = 0;
var bottomRow = maxFlow.length - 1;
for (var i = 0; i < maxFlow[bottomRow].length; i++) { // Bottom row
  if (maxFlow[bottomRow][i] > champion) {
    champion = maxFlow[bottomRow][i];
  }
}

console.log(champion);
