const prompt = require("prompt-sync")({ sigint: true });

const isi1 = prompt("Masukan Data 1 dengan format (dd/mm/yy) : ");
const isi2 = prompt("Masukan Data 2 dengan format (dd/mm/yy) : ");

let [dd1, mm1, yy1] = isi1.split("/");
let [dd2, mm2, yy2] = isi2.split("/");

let day1 = parseInt(dd1, 10);
let month1 = parseInt(mm1, 10);
let year1 = 2000 + parseInt(yy1, 10);

let day2 = parseInt(dd2, 10);
let month2 = parseInt(mm2, 10);
let year2 = 2000 + parseInt(yy2, 10);

console.log(day1, month1, year1);
console.log(day2, month2, year2);


if (isi1 > isi2){
let day = day1 - day2
let month = month1 - month2
let year = year1 - year2
let gabung = year + month + day
let tahun = parseInt (gabung / 365);
let sisa = gabung % 365;
let bulan = parseInt (sisa / 30);
let sisa1 = sisa % 30 ;
let hari = sisa1;


console.log(`${hari} hari ${bulan} bulan ${tahun} tahun`);
} else if (isi1 < isi2){
let day = day2 - day1
let month = month2 - month1
let year = year2 - year1 
let gabung2 = year + month + day
let tahun2 = parseInt (gabung2 / 365);
let sisa2 = gabung2 % 365;
let bulan2 = parseInt (sisa2 / 30);
let sisa3 = sisa2 % 30 ;
let hari = sisa3;
console.log(`${hari} hari ${bulan2} bulan ${tahun2} tahun`);
} else {
    console.log("tidak ada selisih")
}

