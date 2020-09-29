// your class here
/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/
class VendingMachine {
  constructor() {
    this.balance = 0;
    this.till = {
      10: 0,
      50: 0,
      100: 0,
      500: 0,
    };
    this.items = {
      juice: { name: `Apple Juice`, price: 350, count: 5 },
      coffee: { name: "Tully's", price: 250, count: 7 },
      lemonade: { name: "Citron", price: 200, count: 7 },
      chips: { name: "Pringles", price: 400, count: 7 },
      coke: { name: "Coca-Cola", price: 150, count: 7 },
      greenTea: { name: "Matcha", price: 220, count: 7 },
      fruits: { name: "Banana", price: 50, count: 7 },
      dashi: { name: "Nani Kore", price: 450, count: 7 },
    };

    this.inventory = [
      [this.items.juice, this.items.coffee, 0, 0],
      [this.items.lemonade, 0, this.items.chips, 0],
      [this.items.coke, 0, 0, this.items.greenTea],
      [this.items.fruits, this.items.dashi, 0, 0],
    ];

    this.selectedItem = [];
  }

  increaseTill(coin) {
    this.till[coin]++;
  }

  insertCoin(coin) {
    this.increaseTill(coin);
    this.balance += coin;
    console.log(coin);
    console.log(this.inventory[2][3]);
    console.log(this.balance);
    console.log(this.till);
    return coin;
  }

  pressButton(input) {
    this.selectedItem.push(input);
    if (this.selectedItem.length === 2) {
      console.log(`${this.selectedItem[0]} + ${this.selectedItem[1]}`);
    } else {
      console.log(input);
    }
    return input;
  }

  // stockInventory(obj) {}
}
module.exports = VendingMachine;
