const prompt = require("prompt-sync")({ sigint: true });

let hariTotal = Number(prompt("Input Jumlah Hari: "));

let tahun = parseInt(hariTotal / 365);
let sisa = hariTotal % 365;

let bulan = parseInt(sisa / 30);
let hari = sisa % 30;

console.log(`${tahun} tahun ${bulan} bulan ${hari} hari`);
