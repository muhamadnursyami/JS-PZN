//  Bacanya, kalo dia menerima listenet message
addEventListener("message", function (event) {
  // kita ambil data dari event nya.
  const total = event.data; // maksudnya data adalah ini  data yang di kirim kan di postMessage berupa 10000;
  for (let i = 0; i < total; i++) {
    //  kemudia setiap perulangan kita kirim ke worker utama di file web-worker.html
    postMessage(i);
  }
});
