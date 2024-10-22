# calcx

[![CI](https://github.com/iamalperen/calcx/actions/workflows/ci.yml/badge.svg)](https://github.com/iamalperen/calcx/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/calcx.svg?style=flat-square)](https://www.npmjs.com/package/calcx)
[![npm downloads](https://img.shields.io/npm/dm/calcx.svg?style=flat-square)](https://www.npmjs.com/package/calcx)


**calcx** is a powerful TypeScript-based library that provides a wide range of mathematical functions. Whether you need to perform basic arithmetic, geometry, algebra, or complex financial calculations, calcx has you covered.

## Features

- **Geometry Calculations**: Calculate areas, perimeters, and volumes for various shapes like circles, triangles, rectangles, ellipses, spheres, and cylinders.
- **Algebraic Operations**: Perform factorials, permutations, combinations, and logarithmic calculations with ease.
- **Financial Calculations**: Compute simple and compound interest, as well as exponential growth and decay.
- **Conversion Utilities**: Convert numbers between decimal, binary, octal, and hexadecimal formats.
- **Vector Operations**: Calculate distances and centroids for points in a 2D space.

## Installation

You can install calcx via npm:

```bash
npm install calcx
```

Usage
Here’s how you can use calcx in your project:


```typescript
import calcx from 'calcx';

// Example: Calculate the area of a circle
const radius = 5;
const area = calcx.areaOfCircle(radius);
console.log(`The area of the circle is ${area}`);

// Example: Calculate compound interest
const principal = 1000;
const rate = 0.05;
const timesCompounded = 4;
const years = 2;
const futureValue = calcx.compoundInterest(principal, rate, timesCompounded, years);
console.log(`The future value is ${futureValue}`);
```

## API Reference

### Geometry

- **`areaOfCircle(r: number): number`**  
  Calculates the area of a circle given its radius.

- **`perimeterOfCircle(r: number): number`**  
  Calculates the perimeter of a circle given its radius.

- **`areaOfTriangle(base: number, height: number): number`**  
  Calculates the area of a triangle given its base and height.

- **`perimeterOfTriangle(a: number, b: number, c: number): number`**  
  Calculates the perimeter of a triangle given the lengths of its three sides.

- **`areaOfRectangle(width: number, height: number): number`**  
  Calculates the area of a rectangle given its width and height.

- **`perimeterOfRectangle(width: number, height: number): number`**  
  Calculates the perimeter of a rectangle given its width and height.

- **`areaOfEllipse(a: number, b: number): number`**  
  Calculates the area of an ellipse given its semi-major and semi-minor axes.

- **`surfaceAreaOfSphere(r: number): number`**  
  Calculates the surface area of a sphere given its radius.

- **`volumeOfSphere(r: number): number`**  
  Calculates the volume of a sphere given its radius.

- **`surfaceAreaOfCylinder(r: number, h: number): number`**  
  Calculates the surface area of a cylinder given its radius and height.

- **`volumeOfCylinder(r: number, h: number): number`**  
  Calculates the volume of a cylinder given its radius and height.

### Algebra

- **`factorial(n: number): number`**  
  Calculates the factorial of a number.

- **`permutation(n: number, r: number): number`**  
  Calculates the permutation of `n` objects taken `r` at a time.

- **`combination(n: number, r: number): number`**  
  Calculates the combination of `n` objects taken `r` at a time.

- **`log(value: number, base: number): number`**  
  Calculates the logarithm of a value with a given base.

- **`ln(value: number): number`**  
  Calculates the natural logarithm (base `e`) of a value.

### Financial

- **`simplifiedInterest(C: number, r: number, t: number): number`**  
  Calculates the future value of money using simple interest.

- **`compoundInterest(C: number, r: number, n: number, t: number): number`**  
  Calculates the future value of money using compound interest.

- **`exponentialGrowth(P: number, r: number, t: number): number`**  
  Calculates the amount after exponential growth.

- **`exponentialDecay(P: number, r: number, t: number): number`**  
  Calculates the amount after exponential decay.

### Conversion

- **`decimalToBinary(num: number): string`**  
  Converts a decimal number to binary.

- **`decimalToOctal(num: number): string`**  
  Converts a decimal number to octal.

- **`decimalToHex(num: number): string`**  
  Converts a decimal number to hexadecimal.

### Vector Operations

- **`distanceBetweenPoints(x1: number, y1: number, x2: number, y2: number): number`**  
  Calculates the distance between two points in a 2D space.

- **`centroid(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number)`**  
  Calculates the centroid of three points in a 2D space.


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

## 🌟 Support
If you like this project, please give it a ⭐ on GitHub! You can also follow me for more projects.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

Thanks to the developers of [TypeScript](https://www.typescriptlang.org/), [Jest](https://jestjs.io/), and [Husky](https://typicode.github.io/husky/#/).

## Contact

For any inquiries or feedback, please contact [Alperen Talaslıoğlu](https://github.com/iamalperen).
