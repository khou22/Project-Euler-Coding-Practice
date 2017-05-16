/*****************************************************************
Problem 22:
Using names.txt (right click and 'Save Link/Target As...'), a 46K text file
containing over five-thousand first names, begin by sorting it into alphabetical
order. Then working out the alphabetical value for each name, multiply this value
by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is
worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would
obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?
*****************************************************************/
import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.Queue;
import java.util.Arrays; // For array sorting

public class RankedName implements Comparable<RankedName> {

  String name;
  int nameValue;

  public RankedName(String name) {
    this.name = name; // Store instance variable

    int sum = 0;

    for (int i = 0; i < name.length(); i++) {
      char curr = name.charAt(i); // Get character
      int score = (int) curr - 64; // Reduce adscii ranking
      sum += score; // Add to sum
    }

    this.nameValue = sum; // Store value of name characters
  }

  public int score(int rank) {
    return this.nameValue * rank;
  }

  public int compareTo(RankedName that) {
    int length = Math.min(this.name.length(), that.name.length());

    for (int i = 0; i < length; i++) { // Go through all characters
      char a = this.name.charAt(i);
      char b = that.name.charAt(i);
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }
    }

    // They're equal up to that point
    return this.name.length() - that.name.length(); // Choose shorter of the two
  }

  public String toString() { // Human readable
    return this.name + "  " + this.nameValue;
  }

  public static void main(String args[]) {
    Queue<String> tempNames = new Queue<String>(); // Create queue

    while (!StdIn.isEmpty()) { // Read all inputs
      String name = StdIn.readString(); // Get next name
      name = name.substring(1, name.length() - 1); // Cut off quotation marks
      tempNames.enqueue(name); // Add to queue
    }

    RankedName[] names = new RankedName[tempNames.size()]; // Create an array
    for (int i = 0; i < names.length; i++) {
      names[i] = new RankedName(tempNames.dequeue()); // Add RankedName obj to array
    }

    Arrays.sort(names); // Sort arrays

    int sum = 0;
    for (int i = 0; i < names.length; i++) { // Cycle through sorted names
      sum += names[i].score(i + 1); // Using rank
    }

    StdOut.println(names[937]);
    StdOut.println(names[937].score(937 + 1));

    StdOut.println(sum);
  }
}
