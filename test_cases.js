const CalculatorTest = require('./calculator_test');

class CustomCalculatorTest extends CalculatorTest {
  constructor() {
    super();
    this.testCases = [
      {
        "order": { "Red set": 3, "Green set": 2 },
        "hasMemberCard": false,
        "expected": 230,
        "description": "Red set x3, Green set x2, no card"
      },
      {
        "order": { "Red set": 1, "Green set": 1 },
        "hasMemberCard": true,
        "expected": 81,
        "description": "Red and Green set, with card"
      },
      {
        "order": { "Orange set": 2 },
        "hasMemberCard": false,
        "expected": 228,
        "description": "Two Orange sets, no card"
      },
      {
        "order": { "Orange set": 5 },
        "hasMemberCard": true,
        "expected": 541.5,
        "description": "Five Orange sets, with card"
      },
      {
        "order": { "Pink set": 4, "Blue set": 1 },
        "hasMemberCard": false,
        "expected": 334,
        "description": "Four Pink Sets, One Blue Set, No Card"
      },
      {
        "order": { "Green set": 3, "Blue set": 2 },
        "hasMemberCard": true,
        "expected": 176,
        "description": "Green set (3) and Blue set (2) with member card"
      },
      {
        "order": { "Red set": 2, "Green set": 2, "Blue set": 2, "Yellow set": 2, "Pink set": 2, "Purple set": 2, "Orange set": 2 },
        "hasMemberCard": true,
        "expected": 752.4,
        "description": "All sets x 2 with member card"
      },
      {
        "order": { "Orange set": 1, "Pink set": 1, "Green set": 1 },
        "hasMemberCard": false,
        "expected": 240,
        "description": "One of each discountable item, no card"
      },
      {
        "order": { "Orange set": 2, "Pink set": 2, "Green set": 2 },
        "hasMemberCard": true,
        expected: (120 * 2 + 80 * 2 + 40 * 2) * 0.9 - (120 * 0.05 * 2 + 80 * 0.05 * 2 + 40 * 0.05 * 2),
        description: "Two of each discountable item, with card"
      },
      // New harder test cases
      {
        "order": { "Orange set": 10, "Pink set": 10, "Green set": 10 },
        "hasMemberCard": true,
        "expected": (120 * 10 + 80 * 10 + 40 * 10) * 0.9 - (5 * 120 * 0.05 * 2 + 5 * 80 * 0.05 * 2 + 5 * 40 * 0.05 * 2),
        "description": "Ten of each discountable item, with card"
      },
      {
        "order": { "Red set": 5, "Orange set": 3, "Pink set": 2, "Green set": 1 },
        "hasMemberCard": false,
        "expected": 5 * 50 + 3 * 120 + 2 * 80 + 1 * 40 - (1 * 120 * 0.05 * 2 + 1 * 80 * 0.05 * 2),
        "description": "Mixed order with discountable items, no card"
      },
      {
        "order": { "Red set": 10, "Green set": 11, "Blue set": 12 },
        "hasMemberCard": true,
        "expected": (10 * 50 + 11 * 40 + 12 * 30) * 0.9 - (5 * 40 * 0.05 * 2),
        "description": "Large order with member card and partial discount",
      },
      {
        "order": { "Orange set": 2, "Pink set": 3, "Green set": 4, "Red set": 1, "Blue set": 1 },
        "hasMemberCard": true,
        "expected": (2 * 120 + 3 * 80 + 4 * 40 + 1 * 50 + 1 * 30) * 0.9 - (2 * 120 * 0.05 * 2 + 1 * 80 * 0.05 * 2 + 2 * 40 * 0.05 * 2),
        "description": "Multiple discount sets"
      },
      {
        "order": { "Orange set": 7, "Pink set": 5, "Green set": 3, "Red set": 2, "Blue set": 2, "Yellow set": 2 },
        "hasMemberCard": true,
        "expected": (7 * 120 + 5 * 80 + 3 * 40 + 2 * 50 + 2 * 30 + 2 * 50) * 0.9 - (3 * 120 * 0.05 * 2 + 2 * 80 * 0.05 * 2 + 1 * 40 * 0.05 * 2),
        "description": "More complicated order"
      }
    ];
  }
}


const testRunner = new CustomCalculatorTest();
testRunner.run();
