class Calculator {
    constructor() {
      this.menu = {
        "Red set": 50,
        "Green set": 40,
        "Blue set": 30,
        "Yellow set": 50,
        "Pink set": 80,
        "Purple set": 90,
        "Orange set": 120,
      };
    }
  
    /**
     * Calculates the total price of an order.
     *
     * @param {object} order - An object representing the order.  Keys are item names
     * (e.g., "Red set"), values are the quantity of each item.
     * @param {boolean} hasMemberCard -  True if the customer has a member card,
     * false otherwise.
     * @returns {number} The total price of the order, after discounts.
     *
     * @throws {Error} If the order contains an invalid item.
     */
    calculatePrice(order, hasMemberCard) {
      let total = 0;
  
      for (const item in order) {
        if (!this.menu.hasOwnProperty(item)) {
          throw new Error(`Invalid item: ${item}`);
        }
        const quantity = order[item];
        const price = this.menu[item];
        total += price * quantity;
      }
  
      // Apply discounts
      total = this.applyBundleDiscounts(order, total);
      if (hasMemberCard) {
        total *= 0.9; // 10% discount
      }
  
      return total;
    }
  
    /**
     * Applies the bundle discounts for Orange, Pink, and Green sets.
     *
     * @param {object} order -  An object representing the order.
     * @param {number} total - The current total price.
     * @returns {number} The total price after applying bundle discounts.
     */
    applyBundleDiscounts(order, total) {
      const discountItems = ["Orange set", "Pink set", "Green set"];
      for (const itemName of discountItems) {
        if (order[itemName]) {
          const quantity = order[itemName];
          const price = this.menu[itemName];
          const bundles = Math.floor(quantity / 2); // Pairs
          if (bundles > 0) {
            total -= bundles * price * 0.05 * 2; // 5% discount per item in pair, times 2 items.
          }
        }
      }
      return total;
    }
  }
  
  module.exports = Calculator;