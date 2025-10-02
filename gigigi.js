//Dibaca dua buah tanggal (dd:mm:yy). Tulislah algoritma untuk
//menghitung berapa hari jarak kedua tanggal tersebut. Asumsikan: 1
//tahun • 365 hari, 1 bulan " 30 hari. Keluaran (tahun, bulan, hari)
//ditampllkan ke plranti keluaran.
const prompt = require("prompt-sync")({ sigint: true });


let dd1 = Number(prompt("isi tanggal data 1 :"));
let dd2 = Number(prompt("isi tanggal data 2 :"));
let mm1 = Number(prompt("isi bulan data 1 :"));
let mm2 = Number(prompt("isi bulan data 2 :"));
let yy1 = Number(prompt("isi tahun data 1 :"));
let yy2 = Number(prompt("isi tahun data 2 :"));

 
console.log(`${dd1}:${mm1}:${yy1}`);
console.log(`${dd2}:${mm2}:${yy2}`);


let selisihHari = dd1 - dd2
let selisihBulan = mm1 - mm2
let selisihTahun = yy1 - yy2

console.log(`${selisihHari}:${selisihBulan}:${selisihTahun}`)


let tahun = parseInt (selisihTahun / 365);
let sisa1 = selisih % 365;
let bulan = parseInt (selisihBulan / 30);
let sisa2 = selisihHari % 30


console.log(`${tahun} tahun ${bulan} bulan ${sisa2} hari`)



