/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

/*=========== START PRACTICE 1 ===============*/
abstract class Shape {
  abstract calculateArea(): number;
}

export class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

export class Rectangle extends Shape {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  calculateArea(): number {
    return this.height * this.width;
  }
}

export class Triangle extends Shape {
  length: number;

  constructor(length: number) {
    super();
    this.length = length;
  }

  calculateArea(): number {
    return 0.5 * this.length * this.length;
  }
}

/*=========== END PRACTICE 1 ===============*/

/*=========== START PRACTICE 2 ===============*/
abstract class Employee {
  constructor(public name: string) {}

  abstract calculateSalary(): number;
}

export class EmployeeFullTime extends Employee {
  constructor(name: string) {
    super(name);
  }

  calculateSalary(): number {
    return 5000;
  }
}

export class EmployeePartTime extends Employee {
  constructor(name: string) {
    super(name);
  }

  calculateSalary(): number {
    return 3000;
  }
}

export class EmployeeIntern extends Employee {
  constructor(name: string) {
    super(name);
  }

  calculateSalary(): number {
    return 1000;
  }
}

/*=========== END PRACTICE 2 ===============*/
