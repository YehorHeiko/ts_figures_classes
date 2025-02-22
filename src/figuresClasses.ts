// import { ReturnStatement } from './../node_modules/acorn/dist/acorn.d';
export interface Figure {
  shape: string;
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  color: 'red' | 'green' | 'blue';

  a: number;

  b: number;

  c: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0 && b <= 0 && c <= 0) {
      throw new Error('your error message');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Biggest');
    }
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  color: 'red' | 'green' | 'blue';

  radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than zero');
    }
    this.radius = radius;
    this.color = color;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  color: 'red' | 'green' | 'blue';

  width: number;

  height: number;

  constructor(color: 'red' | 'green' | 'blue', width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than zero');
    }
    this.width = width;
    this.height = height;
    this.color = color;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
