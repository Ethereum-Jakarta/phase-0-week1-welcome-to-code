let peran, nama;
peran = ["Ksatria", "Tabib", "Penyihir"];
nama = "ardi";
peran = peran[0];
if (nama === undefined) {
  console.warn("Nama harus diisi!");
} else if (peran === undefined) {
  console.warn("Peran harus dipilih!");
} else {
  console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
  if (peran === "Ksatria") {
    console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
  } else if (peran === "Tabib") {
    console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`);
  } else if (peran === "Penyihir") {
    console.log(
      `Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`,
    );
  }
}
