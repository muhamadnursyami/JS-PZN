export class Person {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.info(`Apa Kabar ${this.name}`);
  }
}
