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
    this.inventory = [];
  }

  increaseTill(coin) {
    this.till[coin]++;
  }

  insertCoin(coin) {
    this.increaseTill(coin);
    this.balance += coin;
    console.log(coin);
    console.log(this.balance);
    console.log(this.till);
    return coin;
  }
}
module.exports = VendingMachine;
