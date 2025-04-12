const Calculator = require('./calculator');

class CalculatorTest {
  constructor() {
    this.calc = new Calculator();
    this.testCases = []
  }

  run() {
    let passed = 0;
    let failed = 0;

    if (!this.testCases || this.testCases.length === 0) {
      console.warn("No test cases to run.");
      return;
    }

    const columnHeaders = [
      "Description",
      "Order",
      "Has Card",
      "Expected",
      "Actual",
      "Result",
    ];
    const columnWidths = [50, 100, 10, 10, 10, 8]; 

    console.log("--- Unit Tests ---");
    this.printRow(columnHeaders, columnWidths);
    this.printSeparator(columnWidths);

    for (const test of this.testCases) {
      try {
        const result = this.calc.calculatePrice(test.order, test.hasMemberCard);
        const resultString = Math.abs(result - test.expected) < 0.001 ? "Passed" : "Failed";
        const row = [
          test.description,
          JSON.stringify(test.order),
          test.hasMemberCard.toString(),
          test.expected.toFixed(2),
          result.toFixed(2),
          resultString,
        ];
        this.printRow(row, columnWidths);

        if (Math.abs(result - test.expected) < 0.001) {
          passed++;
        } else {
          failed++;
        }
      } catch (error) {
        const errorRow = [
          test.description,
          JSON.stringify(test.order),
          test.hasMemberCard.toString(),
          "-",
          "-",
          `Error: ${error.message}`,
        ];
        this.printRow(errorRow, columnWidths);
        failed++;
      }
    }

    this.printSeparator(columnWidths);
    console.log(`Total: ${passed} Passed, ${failed} Failed`);
    console.log("--- Tests End ---");
  }

  printRow(row, widths) {
    let rowString = "";
    for (let i = 0; i < row.length; i++) {
      const value = row[i].substring(0, widths[i]).padEnd(widths[i]); // Truncate and pad
      rowString += value + " ";
    }
    console.log(rowString);
  }

  printSeparator(widths) {
    let separator = "";
    for (const width of widths) {
      separator += "-".repeat(width) + " ";
    }
    console.log(separator);
  }
}

module.exports = CalculatorTest;