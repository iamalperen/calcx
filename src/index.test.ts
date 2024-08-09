import calcx from './index';

describe('calcx', () => {
  test('distanceBetweenPoints should calculate the distance between two points', () => {
    expect(calcx.distanceBetweenPoints(0, 0, 3, 4)).toBe(5);
  });

  test('centroid should calculate the centroid of three points', () => {
    const result = calcx.centroid(0, 0, 6, 0, 3, 6);
    expect(result).toEqual({ x: 3, y: 2 });
  });

  test('areaOfCircle should calculate the area of a circle given the radius', () => {
    expect(calcx.areaOfCircle(3)).toBeCloseTo(28.2743, 4);
  });

  test('perimeterOfCircle should calculate the perimeter of a circle given the radius', () => {
    expect(calcx.perimeterOfCircle(3)).toBeCloseTo(18.84955592153876, 5);
  });

  test('pythagorean should calculate the hypotenuse of a right triangle', () => {
    expect(calcx.pythagorean(3, 4)).toBe(5);
  });

  test('simplifiedInterest should calculate the future value of money with simple interest', () => {
    expect(calcx.simplifiedInterest(1000, 0.05, 2)).toBe(1102.5);
  });

  test('compoundInterest should calculate the future value of money with compound interest', () => {
    expect(calcx.compoundInterest(1000, 0.05, 4, 2)).toBeCloseTo(1104.4861, 4);
  });

  test('decimalToBinary should convert a decimal number to binary', () => {
    expect(calcx.decimalToBinary(10)).toBe('1010');
  });

  test('decimalToOctal should convert a decimal number to octal', () => {
    expect(calcx.decimalToOctal(10)).toBe('12');
  });

  test('decimalToHex should convert a decimal number to hexadecimal', () => {
    expect(calcx.decimalToHex(255)).toBe('ff');
  });

  test('log should calculate the logarithm of a value with a given base', () => {
    expect(calcx.log(8, 2)).toBe(3);
  });

  test('ln should calculate the natural logarithm (base e) of a value', () => {
    expect(calcx.ln(Math.E)).toBe(1);
  });

  test('areaOfSquare should calculate the area of a square', () => {
    expect(calcx.areaOfSquare(4)).toBe(16);
  });

  test('factorial should calculate the factorial of a number', () => {
    expect(calcx.factorial(5)).toBe(120);
  });

  test('permutation should calculate the permutation of n and r', () => {
    expect(calcx.permutation(5, 3)).toBe(60);
  });

  test('combination should calculate the combination of n and r', () => {
    expect(calcx.combination(5, 3)).toBe(10);
  });

  test('areaOfRectangle should calculate the area of a rectangle', () => {
    expect(calcx.areaOfRectangle(4, 5)).toBe(20);
  });

  test('perimeterOfRectangle should calculate the perimeter of a rectangle', () => {
    expect(calcx.perimeterOfRectangle(4, 5)).toBe(18);
  });

  test('areaOfTriangle should calculate the area of a triangle', () => {
    expect(calcx.areaOfTriangle(4, 5)).toBe(10);
  });

  test('perimeterOfTriangle should calculate the perimeter of a triangle', () => {
    expect(calcx.perimeterOfTriangle(3, 4, 5)).toBe(12);
  });

  test('surfaceAreaOfSphere should calculate the surface area of a sphere', () => {
    expect(calcx.surfaceAreaOfSphere(3)).toBeCloseTo(113.0973, 4);
  });

  test('volumeOfSphere should calculate the volume of a sphere', () => {
    expect(calcx.volumeOfSphere(3)).toBeCloseTo(113.0973, 4);
  });

  test('surfaceAreaOfCylinder should calculate the surface area of a cylinder', () => {
    expect(calcx.surfaceAreaOfCylinder(3, 5)).toBeCloseTo(150.7964, 4);
  });

  test('volumeOfCylinder should calculate the volume of a cylinder', () => {
    expect(calcx.volumeOfCylinder(3, 5)).toBeCloseTo(141.3717, 4);
  });

  test('areaOfEllipse should calculate the area of an ellipse', () => {
    expect(calcx.areaOfEllipse(3, 5)).toBeCloseTo(47.12388980384689, 4);
  });

  test('sumOfArithmeticSeries should calculate the sum of an arithmetic series', () => {
    expect(calcx.sumOfArithmeticSeries(1, 1, 5)).toBe(15);
  });

  test('sumOfGeometricSeries should calculate the sum of a geometric series', () => {
    expect(calcx.sumOfGeometricSeries(2, 2, 3)).toBe(14);
  });

  test('exponentialGrowth should calculate the amount after exponential growth', () => {
    expect(calcx.exponentialGrowth(1000, 0.05, 2)).toBeCloseTo(1105.1709, 4);
  });

  test('exponentialDecay should calculate the amount after exponential decay', () => {
    expect(calcx.exponentialDecay(1000, 0.05, 2)).toBeCloseTo(904.8374, 4);
  });
});
