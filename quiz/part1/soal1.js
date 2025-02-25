let nama = "Lingxzz";
let peran = "Ksatria";

if (nama === "") {
  console.log("Nama harus diisi!");
} 

else if (peran === "") {
  console.log("Pilih peran untuk memulai game!");
} 

else {
  console.log("Selamat datang di dunia Proxyita, " + nama);
  

  if (peran === "Ksatria") {
    console.log("Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!");
  } else if (peran === "Tabib") {
    console.log("Halo Tabib " + nama + ", ciptakan keajaiban yang membantu kemenangan!");
  } else if (peran === "Penyihir") {
    console.log("Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenangan!");
  } else {
    // Opsional: Jika peran tidak dikenali
    console.log("Peran tidak dikenali. Pilih Ksatria, Tabib, atau Penyihir.");
  }
}
