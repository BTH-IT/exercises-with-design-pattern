import {
  Circle,
  EmployeeFullTime,
  EmployeeIntern,
  EmployeePartTime,
  Rectangle,
  Triangle,
} from '../../Solid/2.Ocp/main';

describe('Shape Classes', () => {
  describe('Circle', () => {
    it('should calculate the area of a circle correctly', () => {
      const circle = new Circle(5);
      expect(circle.calculateArea()).toBeCloseTo(78.5398, 4); // π * 5^2
    });
  });

  describe('Rectangle', () => {
    it('should calculate the area of a rectangle correctly', () => {
      const rectangle = new Rectangle(4, 5);
      expect(rectangle.calculateArea()).toBe(20); // 4 * 5
    });
  });

  describe('Triangle', () => {
    it('should calculate the area of a triangle correctly', () => {
      const triangle = new Triangle(3);
      expect(triangle.calculateArea()).toBe(4.5); // 0.5 * 3 * 3
    });
  });

  describe('Total Area Calculation', () => {
    it('should calculate the total area of multiple shapes', () => {
      const shapes = [new Circle(5), new Rectangle(4, 5), new Triangle(3)];
      const totalArea = shapes.reduce(
        (total, shape) => total + shape.calculateArea(),
        0
      );
      expect(totalArea).toBeCloseTo(103.0398, 4); // 78.5398 + 20 + 4.5
    });
  });
});

// Tests for Employees
describe('Employee Classes', () => {
  describe('EmployeeFullTime', () => {
    it('should calculate the salary of a full-time employee', () => {
      const fullTimeEmployee = new EmployeeFullTime('Alice');
      expect(fullTimeEmployee.calculateSalary()).toBe(5000);
    });
  });

  describe('EmployeePartTime', () => {
    it('should calculate the salary of a part-time employee', () => {
      const partTimeEmployee = new EmployeePartTime('Bob');
      expect(partTimeEmployee.calculateSalary()).toBe(3000);
    });
  });

  describe('EmployeeIntern', () => {
    it('should calculate the salary of an intern', () => {
      const internEmployee = new EmployeeIntern('Charlie');
      expect(internEmployee.calculateSalary()).toBe(1000);
    });
  });
});
