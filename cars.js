class Vehicle {

  /* Constructor for the Vehicle class. */
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  /* Prints Vehicle information to the console. */
  information() {
    console.log(`${this.make}`);
    console.log(`${this.model}`);
    console.log(`${this.year}`);
  }
}

/* Car inherits from Vehicle. */
class Car extends Vehicle {

  /* Car constructor that calls the constructor from its parent class. */
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }

  /* Car method that calls a method from its parent class. */
  information() {
    super.information();
    console.log(`${this.doors}`);
  }
}

/* Create an instance of the Vehicle class. */
let v = new Vehicle("Toyota", "Corolla", 2007);
/* Create an instance of the Car class. */
let c = new Car("Nissan", "Skyline", 2003, 4);

/* Test that the classes are functioning as expected. */
v.information();
c.information();
