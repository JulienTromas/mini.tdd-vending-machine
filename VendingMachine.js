class VendingMachine {
  constructor() {
    this.balance = 0;

    this.changeAmount = 0;

    this.change = {
      10: 0,
      50: 0,
      100: 0,
      500: 0,
    };

    this.till = {
      10: 10,
      50: 10,
      100: 10,
      500: 10,
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

    this.itemPrice = 0;
  }

  increaseTill(coin) {
    this.till[coin]++;
  }

  noInventory() {
    const errorMessage = "Out of stock";
    console.log(errorMessage);
    return errorMessage;
  }

  insufficientFunds() {
    const errorMessage = "Insufficient funds";
    console.log(errorMessage);
    return errorMessage;
  }

  changeReturn() {
    this.changeAmount = this.balance - this.itemPrice;
    let currentChange = this.balance - this.itemPrice;

    if (currentChange > 100) {
      let moduloHundred = (currentChange - (currentChange % 100)) / 100;
      for (let i = 0; i < moduloHundred; i++) {
        this.change[100]++;
        this.till[100]--;
      }
      currentChange -= 100 * moduloHundred;
    }
    if (currentChange < 100 && currentChange >= 50) {
      let moduloFifty = (currentChange - (currentChange % 50)) / 50;
      for (let i = 0; i < moduloFifty; i++) {
        this.change[50]++;
        this.till[50]--;
      }
      currentChange -= 50 * moduloFifty;
    }
    if (currentChange >= 10) {
      let moduloTen = (currentChange - (currentChange % 10)) / 10;
      for (let i = 0; i < moduloTen; i++) {
        this.change[10]++;
        this.till[10]--;
      }
      currentChange -= 10 * moduloTen;
    }

    return this.change;
  }

  dispenseItem() {
    let letter = this.convertToIndex[0];
    let number = this.convertToIndex[1];

    if (this.inventory[letter][number] === 0) {
      return this.noInventory();
    } else if (this.balance < this.inventory[letter][number].price) {
      return this.insufficientFunds();
    } else {
      this.inventory[letter][number].count--;
      this.itemPrice = this.inventory[letter][number].price;
      console.log(`Here is your ${this.inventory[letter][number].name}`);
    }
  }

  insertCoin(coin) {
    this.increaseTill(coin);
    this.balance += coin;
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
      this.changeReturn();
    } else {
      console.log(input);
      return input;
    }
  }
}

module.exports = VendingMachine;
