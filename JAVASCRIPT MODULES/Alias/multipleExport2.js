function company(com) {
  console.log(`Hello World ${com}`);
}

const names = "Muhamad Nur Syami";

class Human {
  constructor(manusia) {
    this.manusia = manusia;
  }
  sayHuman(name) {
    console.log(`Hello Manusia ${name}`);
  }
}

export { company, Human, names };
