let tanggal = 12;  //isi angka 1-31
let bulan = 8; //isi angka 1-12
let tahun = 2008; // isi angka 1900-2200

let namabulan = "";

const monthConverter = (bulan)=>{
    switch (bulan) {
        case 1:
            namabulan  = "januari";
            break;
        case 2: 
            namabulan = "februari";
            break;
        case 3:
            namabulan = "maret";
            break;
        case 4: namabulan = "april";
            break;
        case 5: namabulan = "mei";
            break;
        case 6: namabulan = "juni";
            break;
        case 7: namabulan = "juli";
             break;
        case 8: namabulan = "agustus";
             break;
        case 9: namabulan = "september";
             break;
        case 10: namabulan = "oktober";
             break;
        case 11: namabulan = "november";
             break;
        case 12: namabulan = "desember";
             break;
     }
}

const dateValidity = (comparedValue,min,max,unit)=>{
    if(comparedValue > max || comparedValue < min){
        console.log(`${unit} tidak valid`);
        return false;
    }

    return true;
}

if(dateValidity(tanggal,1,31,"Tanggal") && dateValidity(bulan,1,12,"Bulan") && dateValidity(tahun,1900,2200,"Tahun")){
    monthConverter(bulan);
    console.log(`${tanggal} ${namabulan} ${tahun}`);
}