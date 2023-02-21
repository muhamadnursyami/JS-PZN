// Export Default Function
/* Export default  itu seakan akan tidak mempunyai nama
  jadi jika kita ingin meng impor itu seakan akan menggunakan alias (as)
*/
// walaupun function nya memiliki nama, tetapi itu wajib, karena di default nilainya, ketika importnya
export default function sayHello(name) {
  console.info(`Hello  ${name}, from default function`);
}
