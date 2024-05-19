class Person {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  displayDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`);
  }
}

// Example usage:
const person1 = new Person("Sathish kumar", 25, "yyy@example.com");
person1.displayDetails();
