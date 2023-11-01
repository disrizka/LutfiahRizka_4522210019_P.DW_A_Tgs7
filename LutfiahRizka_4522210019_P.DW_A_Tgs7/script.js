function generateTriangle(event) {
  event.preventDefault(); // agar tidak refresh saat submit

  // jangan dihapus atau diubah
  let tinggi = parseInt(document.getElementById("tinggiSegitiga").value);
  let karakter = document.getElementById("karakter").value;

  if (Number.isInteger(tinggi) && tinggi > 0) { // Memperbaiki operator logika dari '||' menjadi '&&' untuk memastikan kedua kondisi terpenuhi
    let segitiga = "";

    for (let i = 1; i <= tinggi; i++) { // Memperbaiki loop i yang seharusnya ditambahkan
      for (let j = tinggi - i; j > 0; j--) { // Memperbaiki loop j
        segitiga += "&nbsp;&nbsp;";
      }
      for (let k = 1; k <= 2 * i - 1; k++) { // Memperbaiki loop k
        segitiga += karakter;
      }
      segitiga += "<br>";
    }

    // jangan dihapus atau diubah
    document.getElementById("triangleResult").innerHTML = segitiga;
  } else {
    document.getElementById("triangleResult").innerHTML = "Tinggi segitiga harus berupa bilangan bulat positif.";
  }
}
