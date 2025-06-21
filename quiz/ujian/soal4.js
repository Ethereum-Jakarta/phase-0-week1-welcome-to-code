function xo(str){
    let banyakX=0;
    let banyakO=0;

    for(let i =0;i < str.length;i++){
        if(str[i]==="x"){
            banyakX++;
        }else if(str[i]==="o"){
            banyakO++;
        }
    }

    if(banyakX === banyakO){
        return true;
    }else{
        return false;
    }
}
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true