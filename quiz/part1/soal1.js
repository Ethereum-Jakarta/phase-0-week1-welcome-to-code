let nama = "", peran = "Tabib";
function Proxytia (nama = "", peran = "") {
    if (nama === "") {
        console.log("nama harus diisi");
    } 
    if (peran === "") {
        console.log("Pilih Peranmu untuk memulai game");
    }
    switch(peran) {
        case "Ksatria":
            console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
            break;
        case "Tabib":
            console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
            break;
        case "Penyihir":
            console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
            break;
        default :
            console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada");
    }
}

Proxytia(nama, peran);