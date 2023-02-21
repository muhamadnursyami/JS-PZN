/* Jika kita ingin mengekspos sebuat funtion atau code yang lain , maka didepanya  kita harus
berikan kata export seperti dibawah ini. 
*/
// Ini membuat export function di module
export function sayHello(name) {
  console.log(`Hello ${name}`);
}

export function sayGoodBye(name) {
  console.log(`Good Bye ${name}`);
}

export const names = "Syami"; // mengexport variabel names di module

export class Manusia {
  // mengexport class di module
  constructor(name) {
    this.name = name;
  
  }
  sayHello (nama) {
    console.log(`Hello ${nama} My is ${this.name}`);
  }
}

const person = "Laki-Laki"; // jika kita paksakan dia untuk import,  ketika const person tidak di export, maka akan error
