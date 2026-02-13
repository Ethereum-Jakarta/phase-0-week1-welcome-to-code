function check(){

    if (nama == ""){
        console.log("nama wajib diisi");
        return;
    }

    if (role == ""){
        console.log("Pilih peranmu untuk memulai game");
        return;
    }

    
    if (role == "Ksatria"){
        console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`);
    }

    else if (role == "Tabib"){
        console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
    }

    else if (role == "Penyihir"){
        console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
    }

    else{
        console.log(`tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`);
    }

}

let nama = "eko";
let role = "Ksatria";

check(nama , role);
