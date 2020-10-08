class BMI {

  /* Constructor. */
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }

  /* Method to calculate BMI. */
  calculateBMI() {
    return this.weight / (this.height * 2);
  }
}

/* Create an instance of the BMI class using the constructor. */
let p = new BMI(1.88, 88);

/* Test that the class and its method are functioning. */
console.log(p.calculateBMI());
