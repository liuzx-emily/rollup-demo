export function eat() {
  console.log("ĺčšć");
}

class Fruit {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
}

export class Apple extends Fruit {
  constructor(color) {
    super("apple", color);
  }
}
