const VendingMachine = require("../VendingMachine");
const { expect } = require("chai");

describe("vending machine", () => {
  it("should return zero for the balance when program starts", () => {
    const machine = new VendingMachine();

    expect(machine.balance).to.equal(0);
  });

  it("should be able to insert a coin", () => {
    const machine = new VendingMachine();

    expect(typeof machine.insertCoin).to.equal("function");
  });

  it("should accept valid coins", () => {
    // Setup
    const machine = new VendingMachine();

    // Exercise
    machine.insertCoin(500);

    // Assert
    expect(machine.till).to.deep.equal({
      10: 10,
      50: 10,
      100: 10,
      500: 11,
    });
    expect(machine.balance).to.equal(500); // Use an ES6 getter
  });

  it("should be able to press a button", () => {
    const machine = new VendingMachine();

    expect(typeof machine.pressButton).to.equal("function");
  });

  it("should print a letter when a row is selected", () => {
    const machine = new VendingMachine();

    expect(machine.pressButton("A")).to.equal("A");
  });

  it("should print a row and column", () => {
    const machine = new VendingMachine();

    machine.pressButton("A");
    machine.pressButton(1);

    expect(machine.selectedItem).to.deep.equal(["A", 1]);
  });

  it("should decrease the inventory by one", () => {
    const machine = new VendingMachine();

    machine.pressButton("A");
    machine.pressButton(1);

    expect(machine.inventory[0][0].count).to.equal(4);
  });

  it("should be able to return change", () => {
    const machine = new VendingMachine();

    expect(typeof machine.changeReturn).to.equal("function");
  });

  it("should return the right amount of change", () => {
    const machine = new VendingMachine();

    machine.insertCoin(500);
    machine.pressButton("A");
    machine.pressButton(1);

    expect(machine.changeAmount).to.equal(150);
  });

  it("should return the right amount in coins", () => {
    const machine = new VendingMachine();

    machine.insertCoin(500);
    machine.pressButton("A");
    machine.pressButton(1);

    expect(machine.change).to.deep.equal({
      10: 0,
      50: 1,
      100: 1,
      500: 0,
    });
    expect(machine.changeAmount).to.equal(150);
  });

  it("should remove the right amount of coins from the till", () => {
    const machine = new VendingMachine();

    machine.insertCoin(500);
    machine.pressButton("A");
    machine.pressButton(1);

    expect(machine.till).to.deep.equal({
      10: 10,
      50: 9,
      100: 9,
      500: 11,
    });
    expect(machine.changeAmount).to.equal(150);
  });

  it("should remove the right amount of coins from the till", () => {
    const machine = new VendingMachine();

    machine.insertCoin(500);
    machine.pressButton("D");
    machine.pressButton(3);

    expect(machine.changeAmount).to.equal(150);
  });
});
