class UberCalculator {
  constructor(baseFare, costPerKilometer, costPerMinute) {
    this.baseFare = baseFare;
    this.costPerKilometer = costPerKilometer;
    this.costPerMinute = costPerMinute;
  }

  calculatePrice(distance, time) {
    // Calculate the total price using the provided parameters
    const price =
      this.baseFare +
      this.costPerKilometer * distance +
      this.costPerMinute * time;
    return price;
  }
}

// Example usage
const uberCalculator = new UberCalculator(2.5, 1.5, 0.2); // Base fare, cost per kilometer, cost per minute

const distance = 10; // in kilometers
const time = 15; // in minutes

const totalPrice = uberCalculator.calculatePrice(distance, time);
console.log(`The Uber price is RS ${totalPrice.toFixed(2)}`);
