// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)



function Cap(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function proxytia(PlyNama, PlyPeran){
    let nama = PlyNama || ""; 
    let peran = PlyPeran.toLowerCase() || "";

    const listPeran = ["ksatria", "tabib", "penyihir"];

    if (nama === "") {
        console.log("Nama wajib diisi");
    }
    else if (peran === "") {
        console.log("Pilih Peranmu untuk memulai game");
    }
    else{
        if (listPeran.includes(peran)) {
            if(peran === listPeran[0]){
                console.log(`Halo ${Cap(listPeran[0])} ${nama}, kamu dapat menyerang dengan senjatamu!`);
            }
            else if(peran === listPeran[1]){
                console.log(`Halo ${Cap(listPeran[1])} ${nama}, kamu akan membantu temanmu yang terluka`);
            }
            else if(peran ===  listPeran[2]){
                console.log(`Halo ${Cap(listPeran[2])} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
            }
        }
        else{
            console.log(`${nama} kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`);
        } 
    }
}

//code disini gunakan console.log untuk outputnya
proxytia("Bambang", "Ksatria");
proxytia("Bambang", "tabib");
proxytia("Bambang", "penyiHir");

proxytia("Bambang", "");
proxytia("", "Ksatria");

