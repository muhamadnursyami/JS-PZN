

export const firstName = "Muhamad";
export const middleName = "Nur";
export const lastName = "Syami";

export function hai(name) {
  console.info(`Hello${name} My Name is  Sami`);
}

export class Person {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.info(`Hello ${this.name}`);
  }
}
