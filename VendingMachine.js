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
      lemonade: { name: "Citron", price: 200, count: 70 },
      chips: { name: "Pringles", price: 400, count: 20 },
      coke: { name: "Coca-Cola", price: 150, count: 1 },
      greenTea: { name: "Matcha", price: 220, count: 30 },
      fruits: { name: "Banana", price: 50, count: 50 },
      dashi: { name: "Nani Kore", price: 450, count: 100 },
    };

    this.inventory = [
      [this.items.juice, this.items.coffee, 0, 0],
      [this.items.lemonade, 0, this.items.chips, 0],
      [this.items.coke, 0, 0, this.items.greenTea],
      [this.items.fruits, this.items.dashi, 0, 0],
    ];

    this.selectedItem = [];

    this.convertToIndex = [];
  }

  increaseTill(coin) {
    this.till[coin]++;
  }

  dispenseItem() {
    let letter = this.convertToIndex[0];
    let number = this.convertToIndex[1];
    this.inventory[letter][number].count--;

    console.log(`Here is your ${this.inventory[letter][number].name}`);
    console.log(this.inventory[letter][number].count);
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

    switch (input) {
      case "A":
        this.convertToIndex.push(0);
        break;
      case "B":
        this.convertToIndex.push(1);
        break;
      case "C":
        this.convertToIndex.push(2);
        break;
      case "D":
        this.convertToIndex.push(3);
        break;
      case 1:
        this.convertToIndex.push(0);
        break;
      case 2:
        this.convertToIndex.push(1);
        break;
      case 3:
        this.convertToIndex.push(2);
        break;
      case 4:
        this.convertToIndex.push(3);
        break;

      default:
        console.log("Please press the buttons");
    }

    if (this.selectedItem.length === 2) {
      console.log(
        `You selected row ${this.selectedItem[0]} and column ${this.selectedItem[1]}`
      );
      this.dispenseItem();
    } else {
      console.log(input);

      return input;
    }

    // stockInventory(obj) {}
  }
}
module.exports = VendingMachine;
