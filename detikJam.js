const prompt = require("prompt-sync")({ sigint: true });
let waktu = Number(prompt("Input Waktu Detik: "));
let jam = parseInt (waktu / 3600);
let sisa = waktu % 3600;
let menit = parseInt (sisa / 60);
let sisa1 = sisa % 60;
let detik = sisa1;

console.log(`${jam} jam ${menit} menit ${detik} detik`);