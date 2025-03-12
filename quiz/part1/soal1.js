let nama = "", peran = "";

let roleObj = {
    'tabib':'Tabib',
    'ksatria':'Ksatria',
    'penyihir':'Penyihir'
}

if(!nama){
    console.log("nama wajib diisi");
}

if(!peran){
    console.log("pilih peran mu untuk memulai game");
}

if(peran){
    if(roleObj[peran]){
        console.log(`Halo ${roleObj[peran]} ${nama}, kamu akan membantu temanmu yang terluka`)
    }else{
        console.log("tapi kayaknya kamu jadi bot aja,peran yang kamu pilih ga ada");
    }
}