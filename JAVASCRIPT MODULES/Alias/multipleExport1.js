function company(com) {
  console.log(`Hello World ${com}`);
}

const names = "Muhamad Nur Syami";

class Human {
  constructor(manusia) {
    this.manusia = manusia;
  }
  sayHuman(name) {
    console.log(`Hello Manusia ${name} my is ${this.manusia}`);
  }
}

export { company, Human, names };
// export { company as perusahaan, Human as Manusia, names as nama }; // ini export alias tdk di rekomandasikan
// kita bisa membuat alias di tempat export, seperti ini tapi tidak di rekomendasikan, karena akan terjadi masalah.
// jika di module nya, maksudnya di file index.htmlnya ketika saat di  export pada file multipleExport 1 dan 2
// yang memiliki nama function, variabel dan class yang sama, maka akan error pesanya : function company sudah di declared kan
// jadi bagusnya menggunak alias di import, karena jika kita punya variabel yangsama kita bisa , mengaturnya di import.
